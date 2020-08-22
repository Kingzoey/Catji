<template>
  <div class="root">
    <h2>内部测试页</h2>
    <ul>
      <li>
        <router-link to="/">
          <div class="item">首页/</div>
        </router-link>
      </li>
      <li>
        <router-link to="/video/100000">
          <div class="item">视频播放页/video</div>
        </router-link>
      </li>
      <li>
        <router-link to="/login">
          <div class="item">登录页/login</div>
        </router-link>
      </li>
      <li>
        <router-link to="/register">
          <div class="item">注册页/register</div>
        </router-link>
      </li>
      <li>
        <router-link to="/game">
          <div class="item">游戏页/game</div>
        </router-link>
      </li>
      <!-- <li>
        <router-link to="页面链接">
          <div class="item">注释</div>
        </router-link>
      </li> -->

    </ul>
  </div>
</template>

<script>
export default {
  name: "Test",
};
</script>

<style scoped>
.root {
  box-sizing: content-box;
}

h2 {
  text-align: center;
  margin: 20px 0;
  font-size: 18pt;
}

li {
  display: inline-block;
  vertical-align: top;
}

.item {
  text-align: center;
  background-color: #66ccff;
  height: 150px;
  width: 150px;
  font-size: 20px;
  padding: 5px;
  margin: 10px;
}

.item:hover {
  background-color: #79d2ff;
}
</style>