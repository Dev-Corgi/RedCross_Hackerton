from flask import Flask, render_template, redirect, url_for, session, request
import requests
import json
import sys
import sqlite3
import os

URL1 = os.environ['URL1']
URL2 = os.environ['URL2']
ID=os.environ['CLIENT_ID']






app = Flask(__name__)
app.secret_key = os.urandom(24)
def db():
    conn=sqlite3.connect('board.db',isolation_level=None)
    cur=conn.cursor()
    return cur




@app.route("/")
def root():
    if 'email' not in session:
        return render_template("root.html")
    return redirect('/home')


@app.route("/callback")
def callback():
    try:
        code = request.args.get('code')
        return redirect(url_for("login", name=code))
    except():
        return "failed"

@app.route("/login/<name>") # 한ㄷ메인에 너무많은 요청을하면 session설정에 오류가생김
def login(name):
    DATA1={
        "grant_type": "authorization_code",
        "client_id": ID,
        "redirect_uri": "https://redcross.run.goorm.site/callback",
        "code" : name
    }
    code=requests.post(URL1,data=DATA1)
    access_token=code.json()['access_token']
    DATA2={'Authorization': 'Bearer '+access_token}
    user_info=requests.get(URL2, headers=DATA2).json()['kakao_account']
    name= user_info['profile']['nickname']
    email=user_info['email']
    is_email_verified=user_info['is_email_verified']
    
    if is_email_verified:
        session["email"]=email
        return redirect('/home')
    
    return redirect("/")
    
    
    
@app.route('/home')
def home():
    if 'email' not in session:
        return redirect('/')
    return 'home'

@app.route('/home/list')
def _list():
    if 'email' not in session:
        return redirect('/')
    cur =db()
    cur.execute("SELECT sql FROM sqlite_master WHERE tbl_name='ARTICLE'")
    
    
    
    return str(cur.fetchall())

@app.route('/home/list/write', methods=['POST','GET'])
def write():
    if 'email' not in session:
        return redirect('/')
    try:
        if request.method=='POST':
            cur=db()
            cur.execute("SELECT * FROM ARTICLE")
            index=len(cur.fetchall())
            email=session['email']
            title=request.form['title']
            content=request.form['content']
            cur.execute("INSERT INTO ARTICLE VALUES(?,?,?,?);", (index,email,title,content))
            return redirect(url_for("_list"))
        else:
            return "get"
    except():
        return "error"

    
@app.route('/home/list/<index>')
def read(index):
    cur=db()
    cur.execute("SELECT * FROM ARTICLE WHERE POSTNUMBER=?",(index))
    return str(cur.fetchall())
    


if __name__ == "__main__":

    app.run(debug=True, host='0.0.0.0')
