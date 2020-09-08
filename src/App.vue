<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { loginInfo } from "./api";
export default {
  name: "app",
  async created() {
    try {
      // 用cookie尝试登录
      var res = await loginInfo();
      res = res.data;
      if (res.status === "ok") {
        this.$store.commit("login", res.data);
        this.$message.info("欢迎用户 " + res.data.nickname + " 回到 Catji");
      } else {
        this.$store.commit("logout");
      }
    } catch (e) {
      // 失败说明cookie过期
      this.$store.commit("logout");
    }
  },
};
</script>

<style>
/* 以下是全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* border-box意思是将元素的height,width视为算上边框宽度之后的值 */
}

html {
  color: #505050;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  min-width: 1226px;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #222;
}

a {
  color: #222;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
  -webkit-text-decoration-skip: objects;
}

a,
a:hover {
  text-decoration: none;
}

ol,
ul {
  list-style: none;
}

input,
button {
  border-style: none;
  padding: 0;
}

#app {
  position: relative;
}

/* 用来清除浮动的class */
.clearfix::after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  font-size: 0;
}
</style>
