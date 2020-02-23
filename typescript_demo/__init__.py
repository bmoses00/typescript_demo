from flask import Flask, render_template, redirect, url_for, request, session

import os, sys

app = Flask(__name__)
app.secret_key = os.urandom(16)

@app.route("/")
def root():
    if 'text' in session:
        return render_template("index.html", text = session["text"])
    return render_template("index.html")

if __name__ == "__main__":
    app.debug = True
    app.run()
