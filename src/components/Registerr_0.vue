<template>
  <div class="registerr">
    <h1 class="registerr_title">Catji——同济猫咪分享社区</h1>
    <div class="container clearfix">
      <div class="login clearfix">
        <h2>登 录</h2>
        <div class="send-button">
          <router-link to="/login" class="some-class">
            <span>立即登录</span>
          </router-link>
        </div>
        <div class="social-icons"></div>
      </div>
      <div class="register clearfix">
        <h2>注 册</h2>
        <form action="#" method="post">
          <input type="text" placeholder="请输入用户名" v-model="nickname" />
          <input type="text" placeholder="请输入邮箱" v-model="email" />
          <input type="password" placeholder="请输入密码" v-model="password1" />
          <input type="password" placeholder="再次输入以确认密码" v-model="password2" />
        </form>
        <div class="send-button">
          <form>
            <input type="button" value="注册" @click="register()" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from "../api";
export default {
  name: "Registerr_0",
  data() {
    return {
      nickname: "",
      email: "",
      password1: "",
      password2: "",
    };
  },
  methods: {
    async register() {
      if (this.password1 !== this.password2) {
        return;
      }
      let res = await register(this.nickname, this.email, "", this.password1);
      let usid = res.data;
      console.log(usid);
      this.$store.state.user.usid = usid;
    },
  },
};
</script>

<style scoped>
.some-class {
  text-align: center;
  display: block;
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
  text-decoration: none;
  margin-bottom: 20px;
}

.some-class:hover {
  background-color: rgb(0, 0, 0);
  border: 1px solid #fff;
  color: #fff;
  transition: 0.5s all;
  text-decoration: none;
}

.loginn {
  height: 1000px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  background: url("../assets/backgroundd.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

body a {
  transition: 0.5s all;
  text-decoration: none;
}

h1 {
  font-size: 45px;
  font-weight: 500;
  /* height: 400px; */
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

h2 {
  font-size: 35px;
  text-align: left;
  color: #fff;
  font-weight: 100;
  margin-bottom: 20px;
}

ul.tick {
  list-style: none;
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
}

ul.tick li input[type="checkbox"] {
  display: none;
}

ul.tick li input[type="checkbox"] + label {
  position: relative;
  padding-left: 30px;
  border: #f0f8ff;
  display: inline-block;
  font-size: 13px;
  color: #eee;
}

ul.tick li input[type="checkbox"] + label span:first-child {
  width: 17px;
  height: 17px;
  display: inline-block;
  border: 1px solid #eee;
  position: absolute;
  top: -3px;
  left: 0;
  bottom: 4px;
}

ul.tick li input[type="checkbox"]:checked + label span:first-child:before {
  content: "";
  background: url(../assets/tick.png) no-repeat;
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
  color: #ccc;
  margin-bottom: 15px;
}

.social-icons ul li {
  float: left;
  width: 32.9%;
}
.copyrights {
  text-indent: -9999px;
  height: 0;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
}
li.twt {
  margin: 0 2px;
}

.social-icons ul li a {
  display: block;
}

.social-icons ul li a span {
  vertical-align: middle;
  color: #fff;
  font-size: 15px;
}

.social-icons ul li span.icons {
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
  background: url("../assets/weibo.png") no-repeat;
  background-size: 100%;
}

.social-icons ul li a:hover span.icons {
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
  text-decoration: none;
}

.send-button input[type="button"]:hover {
  background-color: #000;
  border: 1px solid #fff;
  color: #fff;
  transition: 0.5s all;
  text-decoration: none;
}

.login a {
  color: #ccc;
}

.registerr {
  height: 1000px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  background: url("../assets/backgroundd.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

.register {
  width: 44%;
  float: left;
  border-left: 1px solid #ddd;
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

.register_from {
  margin-top: 100px;
}

.footer {
  text-align: center;
  margin: 100px 20px 20px;
}
.footer p {
  color: #ccc;
  line-height: 25px;
}
.footer a {
  color: #ccc;
  text-decoration: none;
}
.footer a:hover {
  color: #fff;
}
</style>