<template>
    <div class=login>
        <div class="header">
            <div class="logo">
                <a href="#">
                    <img src="" alt="" srcset="" width="150">
                </a>
            </div>
        </div>
        
        <div class="mainbody">
            <img src="" width="400" height="300">
            <div class="info">
                <div class="log_list">
                    <ul class="input">
                        <li class="user">
                        <input type="text" placeholder="用户名/邮箱/手机号">
                        </li>
                        <li class="user">
                            <input type="text" placeholder="密码">
                        </li>
                        <li class="remember_password">
                        <input type="checkbox">
                            <label for="">记住密码</label>
                            <a href="#">忘记密码</a>
                        </li>
                        <li class="log_button">
                            <button>登录</button>
                        </li>
                        <li class="log_choose">
                            <a href="#">立即注册</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    li
    {
        list-style: none;
    }
    .mainbody
    {
        height: 400px;
        background-color:pink;
    }
    .mainbody img
    {
        position: absolute;
        top: 150px;
        width: 500px;
        left: 100px;
    }
    .info
    {
        position: relative;
    }
    .log_list
    {
        position: absolute;
        top: 100px;
        right: 30px;
        width: 140px;	
        height: 30px;
        border: 1px solid #fff;
        height: 180px;
        width: 350px;
        background-color: #fff;
    }
    .input
    {
        margin: 20px 20px auto auto;
    }
    .input li
    {
        margin: 5px 0 0 38px;
    }

    .user input
    {
        width:250px;
        height: 30px;
        border: 1px solid #bbbaba;
    }
    .user input:focus
    {
        border-color:#3AA2E4;
    }
    .remember_password
    {
        color: #b2b2b2;
        border: 1px solid #fff;
        width: 250px;
    }

    .remember_password a
    {
        float:right;
    }
    .log_button button
    {
        position: absolute;
        left: 130px;
        border: none;
        width: 80px;
        height: 37px;
        background-color: #b1191a;
        text-align: center;	
        color: #fff;
        font-size: 16px;
    }
    .log_choose a
    {
        font-size: 12px;
        color: #1474af;
        padding-top: 20px;
        padding-right: 30px;
        float: right;
    }
</style>