<template>
  <nav>
    <!-- 左侧导航栏 -->
    <div>
      <router-link to="/">Home</router-link>|
      <router-link to="/home_0">Home_0</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/register">Register</router-link>|
      <router-link to="/space">Space</router-link>|
      <router-link to="/search">Search</router-link>
    </div>
    
    <!-- 左侧导航栏 -->
    <div>

    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav {
  background-color: black;
}
</style>