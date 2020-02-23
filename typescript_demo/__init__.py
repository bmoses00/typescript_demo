from flask import Flask, render_template, redirect, url_for, request, session

import os, sys

app = Flask(__name__)
app.secret_key = os.urandom(16)

@app.route("/")
def root():
    if 'text' in session:
        return render_template("index.html", text = session["text"])
    return render_template("index.html")

@app.route("/compile")
def compile():
    DIR = os.path.dirname(__file__)
    DIR += '/'
    file_path = DIR + "text.ts"
    file = open(file_path, "w")
    file.write(request.args["ts"])
    file.close()
    fork = os.fork()
    if (fork == 0):
        os.execlp('tsc', 'tsc', file_path)
    os.waitpid(fork, 0)
    file_path = DIR + "text.js"
    file = open(file_path, "r")
    session["text"] = file.readlines()
    file.close()
    return redirect(url_for("root"))

if __name__ == "__main__":
    app.run()
