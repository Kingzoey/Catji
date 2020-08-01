<template>
	<!--
      <div>
      <router-link to="/">Home</router-link>|
      <router-link to="/home_0">Home_0</router-link>|
      <router-link to="/home_1">Home_1</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/register">Register</router-link>|
      <router-link to="/space">Space</router-link>|
      <router-link to="/search">Search</router-link>|
	<router-link to="/mine">Mine</router-link>|
	<router-link to="/message">Message</router-link>|
	<router-link to="/blog">Blog</router-link>|
	<router-link to="/favorite">Favorite</router-link>|
	<router-link to="/release">Release</router-link>
	</div>
  </nav>
  -->
  <div class="top">
			<div class="a">
				<div class="b">

					<ul style="float: left;">
						<li><router-link to="/">首页</router-link></li>
						<li><router-link to="/home_0">首页_0</router-link></li>
						<li><router-link to="/login">登录</router-link></li>
						<li><router-link to="/register">注册</router-link></li>
						<li><router-link to="/search">搜索</router-link></li>
					</ul>

					<ul style="float: right;">
						<li><router-link to="/mine">用户</router-link></li>
						<li><router-link to="/message">消息</router-link></li>
						<li><router-link to="/blog">动态</router-link></li>
						<li><router-link to="/favorite">收藏</router-link></li>
						<li class="tougao"><router-link to="/release">投稿</router-link></li>
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
/*
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
*/
*{margin: 0; padding: 0;} 
.top {
	width: 100%;
	height: 100px;
	background: url(../assets/Nav.png);}

.top .a {
	width: 100%;
	height: 38px;
	background: rgba(255, 255, 255, 0.5);}
	
.top .a .b {
	width: 1000px;
	height: 38px;
	margin: 0 auto;}

.top .a .b ul li{
	width: 50px;
	height: 38px;
	float: left;
	list-style: none;
	line-height: 38px;
	text-align: center;
	font-size: 16px;
	font-family: 微软雅黑;
	font-weight: 100px;}

.top .a .b ul li:hover{
	background-color: aqua;}

.top .a .b ul li a {
	text-decoration: none;
	width: 50px;
	height: 38px;
	display: block;
	color: aliceblue;}

.top .a .b ul li.tougao{
	height: 55px;
	background: pink;
	border-radius:0 0 15px 15px;}

</style>