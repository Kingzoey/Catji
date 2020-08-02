<template>
    <div class="register">
        <div class="header">
            <div class="logo">
                <a href="webhw.html">
                    <img src="logo.jpg" alt="" >
                </a>
            </div>
        </div>
        <div class="mainbody">
            <div class="reg_head">
                <p>注册新用户<em>我有账号，去<a href="/login">登录</a></em></p>
                
        </div>
            <div class=reg_list>
                <ul>
                    <li class="user">
                        <label for="tel">手机号：</label>
                        <input type="text" id="tel">
                    </li>
                    <li class="user">
                        <label for="username">用户名：</label>
                        <input type="text" id="username">
                    </li>
                    <li class="user">
                        <label for="password">密码：</label>
                        <input type="text" id="password">
                    </li>
                    <li class="user">
                        <label for="con_password">确认密码：</label>
                        <input type="text" id="con_password">
                    </li>
                    <li class="agree">
                        <input type="checkbox">同意协议并注册
                        <a href="#">用户协议</a>
                    </li>
                    <li class="finish">
                        <a href="#">
                            <button>完成注册</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
    li
    {
        list-style: none;
    }
    .header
    {
        height: 100px;
        border-bottom: 2px solid #b1191a;
    }

    .mainbody
    {
        height: 520px;
        border: 1px solid #ccc;
        margin-top: 20px;
    }
    .reg_head
    {
        height: 30px;
        border-bottom: 1px solid #ccc;
    }

    .reg_head p
    {
        font-size: 18px;
        color:#111111;
        padding: 0 10px;
    }
    .reg_head p em
    {
        float: right;
        font-size:12px;
        padding-top: 5px;
    }

    .reg_list
    {
        width: 580px;
        height: 400px;
        margin: 50px auto;
    }

    .user
    {
        margin-bottom: 20px;
    }
    .user label
    {
        display: inline-block;
        width: 100px;
        height: 30px;
        text-align: right;
        font-size: 14px;
    }
    .user input
    {
        width: 250px;
        padding-left: 10px;
    }

    .agree
    {
        font-size: 14px;
        padding-left: 140px;
    }

    .agree a
    {
        font-size: 12px;
        padding: 0 5px;
    }

    .agree input
    {
        width: 15px;
        height: 15px;
        vertical-align: middle;
    }

    .finish button
    {
        display: block;
        width: 150px;
        height: 30px;
        background-color: #c81623;
        margin: 25px 145px;
        color: #fff;
        text-align: center;
        border: none;
        outline: none;
    }
</style>
