<template>
  <div class="login-warp">
    <h1>Catji——同济猫咪分享社区</h1>
    <div class="container clearfix">
      <div class="login">
        <h2>登 录</h2>
        <form action="#" method="post">
          <input type="text" name="Userame" placeholder="请输入用户名" />
          <input type="password" name="Password" placeholder="请输入密码" />
        </form>
        <ul class="tick">
          <li>
            <input type="checkbox" id="brand1" />
            <label for="brand1">
              <span></span>
              记住我
            </label>
          </li>
        </ul>
        <div class="send-button">
          <form>
            <input type="button" value="登 录" />
          </form>
        </div>
        <a href="#">记住密码?</a>
        <div class="social">
          <p>- 其他方式登录 -</p>
          <ul>
            <li class="qq">
              <a href="#">
                <span class="icons"></span>
                <span class="text">QQ</span>
              </a>
            </li>
            <li class="weixin">
              <a href="#">
                <span class="icons"></span>
                <span class="text">微信</span>
              </a>
            </li>
            <li class="weibo">
              <a href="#">
                <span class="icons"></span>
                <span class="text">微博</span>
              </a>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
      <div class="register clearfix">
        <h2>注 册</h2>
        <router-link to="/register" class="some-class">
          <span>立即注册</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-warp {
  height: 1000px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  background: url("../assets/backgroundd.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.some-class {
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  margin-top: 100px;
  margin-left: 150px;
  width: 150px;
  height: 50px;
  background-image: linear-gradient(to top, #d8d9db 0%, #fff 80%, #fdfdfd 100%);
  border-radius: 30px;
  border: 1px solid #8f9092;
  /* box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 3px 0 #CECFD1; */
  transition: all 0.2s ease;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-shadow: 0 1px #fff;
  color: #606060;
}
body a {
  transition: 0.5s all;
  text-decoration: none;
}

h1 {
  font-size: 45px;
  font-weight: 500;
  line-height: 200px;
  letter-spacing: 4px;
  color: #ffffff;
}

.container {
  width: 50%;
  margin: 0 auto;
  padding: 40px;
  background-color: rgba(10, 10, 10, 0.77);
  border: 2px ridge rgba(238, 238, 238, 0.13);
  border-radius: 5px;
  box-shadow: 0 -5px 10px 1px rgba(16, 16, 16, 0.57);
}

.login {
  width: 45%;
  float: left;
  text-align: left;
  padding-right: 40px;
  border-right: 1px solid #ddd;
}

h2 {
  font-size: 35px;
  text-align: left;
  color: #fff;
  font-weight: 100;
  margin-bottom: 20px;
}

.tick {
  list-style: none;
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
}

.tick li input[type="checkbox"] {
  display: none;
}

.tick li input[type="checkbox"] + label {
  position: relative;
  padding-left: 30px;
  border: #f0f8ff;
  display: inline-block;
  font-size: 13px;
  color: #eee;
}

.tick li input[type="checkbox"] + label span:first-child {
  width: 17px;
  height: 17px;
  display: inline-block;
  border: 1px solid #eee;
  position: absolute;
  top: -3px;
  left: 0;
  bottom: 4px;
}

.tick li input[type="checkbox"]:checked + label span:first-child:before {
  content: "";
  background: url(../assets/tick.png) no-repeat;
  position: absolute;
  left: 3px;
  top: 3px;
  font-size: 10px;
  width: 10px;
  height: 10px;
}

.social {
  margin-top: 20px;
  text-align: center;
}

.social p {
  color: #ccc;
  margin-bottom: 15px;
}

.social ul li {
  float: left;
  width: 32.9%;
}

.social ul li a {
  display: block;
}

.social ul li a span {
  vertical-align: middle;
  color: #fff;
  font-size: 15px;
}

.social ul li span.icons {
  width: 30px;
  height: 30px;
  display: inline-block;
}

.weixin span.icons {
  background: url("../assets/weixin.png") no-repeat;
  background-size: 100%;
}
.qq span.icons {
  background: url("../assets/QQ.png") no-repeat;
  background-size: 100%;
}
.weibo span.icons {
  background: url("../assets/weibo.png") no-repeat;
  background-size: 100%;
}

.social ul li a:hover span.icons {
  transform: rotatey(360deg);
  transition: 0.5s all;
}

input[type="text"],
input[type="password"] {
  width: 93.4%;
  margin-bottom: 20px;
  padding: 10px;
  float: left;
  background-color: transparent;
  border: none;
  font-size: 15px;
  border-bottom: 1px solid rgba(238, 238, 238, 0.41);
  outline: none;
  color: #fff;
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
  color: #ccc;
  border: 1px solid rgba(238, 238, 238, 0.41);
  border-width: thin;
  cursor: pointer;
  outline: none;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  text-decoration: none;
}

.send-button input[type="button"]:hover {
  background-color: #000;
  border: 1px solid #fff;
  color: #fff;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  text-decoration: none;
}

.login a {
  color: #ccc;
}

.login a:hover {
  color: #fff;
}

.register {
  width: 44%;
  float: left;
  padding-left: 40px;
  text-align: left;
}

.register p {
  color: #ccc;
  margin-bottom: 10px;
}

.register p a {
  color: #ccc;
}

.register p a:hover {
  color: #fff;
}
</style>