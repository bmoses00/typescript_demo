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
    file = open("text.ts", "w")
    file.write(request.args["ts"])
    file.close()
    fork = os.fork()
    print("fork: ")
    print(fork)
    if (fork == 0):
        # sys.stdout = open('redirect.txt', 'w')
        # sys.stderr = open('error.txt', 'w')
        print("sys.stdout:")
        print(sys.stdout)
        os.execlp('tsc', 'tsc', 'text.ts')
    os.waitpid(fork, 0)
    file = open("text.js", "r")
    session["text"] = file.readlines()
    file.close()
    print(session["text"])
    return redirect(url_for("root"))

if __name__ == "__main__":
    app.debug = True
    app.run()
