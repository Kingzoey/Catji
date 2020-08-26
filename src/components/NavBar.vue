<template>
  <div class="header-box">
    <div class="header">
      <div class="nav">
        <ul>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/login">登录</router-link>
          </li>
          <li>
            <router-link to="/register">注册</router-link>
          </li>
          <li>
            <router-link to="/search">
              <font-awesome-icon :icon="['fas', 'search']" />
            </router-link>
          </li>
        </ul>
      </div>
      <div class="nav">
        <ul>
          <li>
            <router-link to="/space">
              <template v-if="this.$store.state.user.usid">{{this.$store.state.user.name}}</template>
              <font-awesome-icon v-else :icon="['fas', 'user']" />
            </router-link>
          </li>
          <li v-if="this.$store.state.user.usid">
            <router-link :to="{path:'/logout',query:{src:'/'}}">注销</router-link>
          </li>
          <li>
            <router-link to="/message">消息</router-link>
          </li>
          <li>
            <router-link to="/blog">动态</router-link>
          </li>
          <li>
            <router-link to="/favorite">收藏</router-link>
          </li>
          <li class="upload">
            <router-link to="/upload">投稿</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.header-box {
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}

.header {
  width: 1000px;
  margin: 0 auto;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-box,
.header,
.nav-left ul,
.nav-right ul {
  height: 55px;
}

.nav ul {
  display: flex;
  align-items: center;
}

.nav li {
  width: 50px;
  text-align: center;
  font-size: 12pt;
  transition: all 0.3s;
}

.nav li a {
  color: #222;
  display: block;
}

.nav li a:hover {
  color: #fb7299;
}

.upload {
  line-height: 75px;
  background: #fb7299;
  border-radius: 0 0 15px 15px;
}

.upload a {
  color: #fff !important;
}
</style>