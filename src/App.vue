<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
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
  font: 12px -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
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

[type="button"],
[type="reset"],
[type="submit"],
button {
  border-style: none;
  padding: 0;
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
