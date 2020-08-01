<template>
  <nav>
    <!-- 左侧导航栏 -->
    <div>
      <router-link to="/">Home</router-link>|
      <router-link to="/home_0">Home_0</router-link>|
      <router-link to="/home_1">Home_1</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/register">Register</router-link>|
      <router-link to="/space">Space</router-link>|
      <router-link to="/search">Search</router-link>|
    <!-- 左侧导航栏 -->
	<router-link to="/mine">Mine</router-link>|
	<router-link to="/message">Message</router-link>|
	<router-link to="/blog">Blog</router-link>|
	<router-link to="/favorite">Favorite</router-link>|
	<router-link to="/release">Release</router-link>
	</div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav{
	float: inherit;
	width:1700px;
	height:140px;
	background-image:url(../assets/Nav.png);
	margin: 10px 0 0 0;
	padding:5px 400px;
}
nav div router-link:hover{
	color: white;
}
.sidebar div{
  height: 40px;
  line-height: 10px;
}
</style>