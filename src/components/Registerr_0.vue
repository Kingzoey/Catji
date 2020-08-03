<template>
<div class=registerr>
	<title>Catji——同济猫咪分享社区</title>
	<!-- Meta-Tags -->
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<script type="application/x-javascript"> 
		addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); 
		function hideURLbar(){ window.scrollTo(0,1); } </script>
	<!-- //Meta-Tags -->

	<!-- Style -->
	<h1>Catji——同济猫咪分享社区</h1>

	<div class="container w3layouts agileits">

		<div class="login w3layouts agileits">
			<h2>登 录</h2>
			
			<div class="send-button w3layouts agileits">
                <a href="/login/" style='-webkit-appearance: none;
                <button>立即登录</button>
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
    margin-top:100px;
    margin-left:150px;
    width: 150px;
    height: 50px;
    background-image: linear-gradient(to top, #D8D9DB 0%, #fff 80%, #FDFDFD 100%);
    border-radius: 30px;
    border: 1px solid #8F9092;
    /* box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 3px 0 #CECFD1; */
    transition: all 0.2s ease;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #606060;
    text-shadow: 0 1px #fff;color:#606060' id="login_from"><span>立即登录</span></a>
            </div>
        <div class="social-icons w3layouts agileits">

        </div>
			<div class="clear"></div>
		</div>
		<div class="register w3layouts agileits">
			<h2>注 册</h2>
			<form action="#" method="post">
				<input type="text"  placeholder="请输入用户名" id="re_username">
				<input type="text" placeholder="请输入姓名" id= "re_name">
				<input type="text" placeholder="请输入年龄" id= "re_age">
				<input type="password"  placeholder="请输入密码" id="re_password">
				<input type="password"  placeholder="请输入确认密码" id="re_repassword">
			</form>
			<div class="send-button w3layouts agileits">
				<form>
					<input type="button" value="免费注册" id = "register">
				</form>
			</div>
			<div class="clear"></div>
		</div>
		<div class="clear"></div>
	</div>
</div>
</template>

<style>
    /*-- Reset Code --*/	html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,nav ul,nav li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}
	article, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}
	ol,ul{list-style:none;padding:0;margin:0;}
	blockquote,q{quotes:none;}
	blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}
	table{border-collapse:collapse;border-spacing:0;}
	a{text-decoration:none;}
	.txt-rt{text-align:right;}
	.txt-lt{text-align:left;}
	.txt-center{text-align:center;}
	.float-rt{float:right;}
	.float-lt{float:left;}
	.clear{clear:both;}
	.pos-relative{position:relative;}
	.pos-absolute{position:absolute;}
	.vertical-base{vertical-align:baseline;}
	.vertical-top{vertical-align:top;}
	.underline{	padding-bottom:3px;	border-bottom: 1px solid #eee;}
	nav.vertical ul li{display:block;}
	nav.horizontal ul li{display: inline-block;}
	img{max-width:100%;}

/*-- Reset Code --*/



/*-- Index-Page-Styling --*/

body {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    background: url("../assets/backgroundd.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
}

body a {
    transition:0.5s all;
    -webkit-transition:0.5s all;
    -moz-transition:0.5s all;
    -o-transition:0.5s all;
    -ms-transition:0.5s all;
    text-decoration: none;
}

h1 {
    font-size: 45px;
    font-weight: 500;
    letter-spacing: 4px;
    margin: 60px 0;
    color: #FFFFFF;
}

.container {
    width: 50%;
    margin: 0 auto;
    padding: 40px;
    background-color: rgba(10, 10, 10, 0.77);
    border: 2px ridge rgba(238, 238, 238, 0.13);
    border-radius: 5px;
    -moz-box-shadow: 0 -5px 10px 1px rgba(16, 16, 16, 0.57);
    -webkit-box-shadow: 0 -5px 10px 1px rgba(16, 16, 16, 0.57);
    box-shadow: 0 -5px 10px 1px rgba(16, 16, 16, 0.57);
    border-bottom: none;
    border-bottom-left-radius: initial;
    border-bottom-right-radius: initial;
}

.login {
    width: 45%;
    float: left;
    text-align: left;
    padding-right: 40px;
}

::-webkit-input-placeholder {
    color: #CCC;
}

:-moz-placeholder {
    color: #CCC;
}

::-moz-placeholder {
    color: #CCC;
}

:-ms-input-placeholder {
    color: #CCC;
}

h2 {
    font-size: 35px;
    text-align: left;
    color: #FFF;
    font-weight: 100;
    margin-bottom: 20px;
}

ul.tick {
    float: left;
    list-style: none;
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
}

ul.tick li input[type="checkbox"] {
    display: none;
}

ul.tick li input[type="checkbox"]+label {
    position: relative;
    padding-left: 30px;
    border: #F0F8FF;
    display: inline-block;
    font-size: 13px;
    color: #EEE;
}

ul.tick li input[type="checkbox"]+label span:first-child {
    width: 17px;
    height: 17px;
    display: inline-block;
    border: 1px solid #EEE;
    position: absolute;
    top: -3px;
    left: 0;
    bottom: 4px;
}

ul.tick li input[type="checkbox"]:checked+label span:first-child:before {
    content: "";
    background: url(../assets/tick.png)no-repeat;
    position: absolute;
    left: 3px;
    top: 3px;
    font-size: 10px;
    width: 10px;
    height: 10px;
}

.social-icons {
    margin-top: 20px;
    text-align: center;
}

.social-icons p {
    color: #CCC;
    margin-bottom: 15px;
}

.social-icons ul li {
    float: left;
    width: 32.9%;
}
.copyrights{text-indent:-9999px;height:0;line-height:0;font-size:0;overflow:hidden;}
li.twt {
    margin: 0 2px;
}

.social-icons ul li a {
    display:block;
}

.social-icons ul li a span {
    vertical-align: middle;
    color: #fff;
    font-size: 15px;
}

.social-icons ul li span.icons {
    background: url("../assets/i1.png") no-repeat center;
    width: 30px;
    height: 30px;
    display: inline-block;
}

.social-icons ul li.weixin span.icons {
    background: url("../assets/weixin.png") no-repeat;
    background-size: 100%;
}
.social-icons ul li.qq span.icons {
    background: url("../assets/QQ.png") no-repeat;
    background-size: 100%;
}
.social-icons ul li.weibo span.icons {
    /*--w3layouts--*/
    /*--agileits--*/
    background: url("../assets/weibo.png") no-repeat;
    background-size: 100%;
}

.social-icons ul li a:hover span.icons {
    transform: rotatey(360deg);
    -webkit-transform: rotatey(360deg);
    -o-transform: rotatey(360deg);
    -moz-transform: rotatey(360deg);
    -ms-transform: rotatey(360deg);
    transition: .5s all;
}

input[type="text"], input[type="password"] {
    width: 93.4%;
    margin-bottom: 20px;
    padding: 10px;
    float: left;
    background-color: transparent;
    border: none;
    font-size: 15px;
    border-bottom: 1px solid rgba(238, 238, 238, 0.41);
    outline: none;
    color: #FFF;
}

.send-button {
    margin-bottom: 20px;
}

.send-button input[type="button"] {
    width: 60%;
    padding: 10px 0;
    font-size: 16px;
    font-weight: 100;
    background-color: transparent;
    color: #CCC;
    border: 1px solid rgba(238, 238, 238, 0.41);
    border-width: thin;
    cursor: pointer;
    outline: none;
    transition:0.5s all;
    -webkit-transition:0.5s all;
    -moz-transition:0.5s all;
    -o-transition:0.5s all;
    -ms-transition:0.5s all;
    text-decoration: none;
}

/*--w3layouts--*/
/*--agileits--*/
.send-button input[type="button"]:hover {
    background-color: #000;
    border: 1px solid #FFF;
    color: #FFF;
    transition:0.5s all;
    -webkit-transition:0.5s all;
    -moz-transition:0.5s all;
    -o-transition:0.5s all;
    -ms-transition:0.5s all;
    text-decoration: none;
}

.login a {
    color: #CCC;
}

.login a:hover {
    color: #FFF;
}

.register {
    width: 44%;
    float: left;
    border-left: 1px solid #DDD;
    padding-left: 40px;
    text-align: left;
}

.register p {
    color: #CCC;
    margin-bottom: 10px;
}

.register p a {
    color: #CCC;
}

.register p a:hover {
    color: #FFF;
}

.footer {
    text-align: center;
    margin: 100px 20px 20px;
}
.footer p {
    color: #CCC;
    line-height: 25px;
    /*--w3layouts--*/
    /*--agileits--*/
}
.footer a {
    color: #CCC;
    text-decoration: none;
}
.footer a:hover {
    color: #FFF;
}

/*-- Index-Page-Styling --*/

/*--- Responsive Code ---*/



@media screen and (max-width: 1920px) {
    h1 {
        margin: 100px 0;
    }
}

@media screen and (max-width: 1600px) {
    h1 {
        margin: 60px 0;
    }
}

@media screen and (max-width: 1440px) {
    .container {
        width: 53%;
    }
}

@media screen and (max-width: 1366px) {
    h1 {
        margin: 50px 0;
    }
    .container {
        width: 57%;
    }
    /*--w3layouts--*/
    /*--agileits--*/
}

@media screen and (max-width: 1280px) {
    .container {
        width: 60%;
    }
}

@media screen and (max-width: 1024px) {
    .container {
        width: 76%;
    }
}

@media screen and (max-width: 966px) {
    .container {
        width: 80%;
    }
    .footer {
        margin: 50px 20px 20px;
    }
}

@media screen and (max-width: 853px) {
    .login {
        padding-right: 36px;
    }
    .register {
        padding-left: 36px;
    }
    .social-icons ul li {
        width: 32.8%;
    }
    .register p {
        font-size: 14px;
    }
}

@media screen and (max-width: 800px) {
    h1 {
        font-size: 43px;
    }
    .login {
        padding-right: 35px;
    }
    .register {
        padding-left: 34px;
    }
    .social-icons ul li span.icons {
        width: 28px;
    }
}

@media screen and (max-width: 768px) {
    .container {
        width: 85%;
    }
    .register p {
        font-size: 13.8px;
    }
}

@media screen and (max-width: 736px) {
    h1 {
        font-size: 40px;
    }
    .container {
        width: 87%;
        padding: 35px;
    }
    .login {
        padding-right: 34px;
    }
    .register {
        padding-left: 33px;
    }
    .social-icons ul li a span {
        font-size: 14px;
    }
    .register p {
        font-size: 13.2px;
    }
}

@media screen and (max-width: 667px) {
    h1 {
        font-size: 35px;
        letter-spacing: 3px;
    }
    .container {
        width: 55%;
        padding: 50px;
    }
    .login {
        padding: 0;
        width: 100%;
        margin-bottom: 50px;
    }
    .register {
        padding: 40px 0 0 0;
        width: 100%;
        border: none;
        border-top: 1px solid #DDD;
    }
}

@media screen and (max-width: 603px) {
    h1 {
        letter-spacing: 2px;
    }
}

@media screen and (max-width: 568px) {
    h1 {
        letter-spacing: 1px;
        margin: 30px 0;
    }
    .container {
        width: 60%;
        padding: 40px;
    }
}

@media screen and (max-width: 533px) {
    h1 {
        font-size: 32px;
    }
}

@media screen and (max-width: 480px) {
    .container {
        width: 70%;
        padding: 35px;
    }
    .send-button input[type="submit"] {
        width: 50%;
        padding: 8px 0;
    }
}

@media screen and (max-width: 414px) {
    h1 {
        font-size: 30px;
    }
    .container {
        width: 75%;
        padding: 25px;
    }
    .login {
        margin-bottom: 30px;
    }
    h2 {
        font-size: 30px;
        margin-bottom: 15px;
    }
    .register {
        padding: 30px 0 0 0;
    }
    .footer p {
        font-size: 14px;
    }
}

@media screen and (max-width: 384px) {
    h1 {
        letter-spacing: 0px;
    }
}

@media screen and (max-width: 375px) {
    .social-icons ul li span.icons {
        width: 27px;
    }
    .register p {
        font-size: 13px;
        line-height: 23px;
    }
}

@media screen and (max-width: 360px) {
    .container {
        width: 80%;
        padding: 20px;
    }
}

@media screen and (max-width: 320px) {
    .social-icons ul li {
        width: 32.7%;
    }
    .social-icons ul li span.icons {
        width: 25px;
    }
    .social-icons ul li a span {
        font-size: 12.4px;
    }
}
/*--- Responsive Code ---*/

</style>