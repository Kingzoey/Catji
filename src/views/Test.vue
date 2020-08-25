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
          <div class="item">游戏页/game(待开发)</div>
        </router-link>
      </li>
      <li>
        <router-link to="/tag">
          <div class="item">Tag页/tag(微博式tag，无法页内切换)</div>
        </router-link>
      </li>
      <li>
        <router-link to="/tagg">
          <div class="item">Tagg页/tagg(可页内切换，tag样式可改进)</div>
        </router-link>
      </li>
      <li>
        <router-link to="/cat">
          <div class="item">猫咪主页/cat</div>
        </router-link>
      </li>
      <li>
        <router-link to="/search">
          <div class="item">搜索页/search</div>
        </router-link>
      </li>
      <li>
        <router-link to="/searchresult">
          <div class="item">搜索结果页/searchresult</div>
        </router-link>
      </li>
      <li>
        <router-link to="/blog">
          <div class="item">动态页/blog</div>
        </router-link>
      </li>
      <li>
        <router-link to="/catspace">
          <div class="item">猫咪广场页/catspace</div>
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