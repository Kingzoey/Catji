<template>
  <div class="register clearfix">
    <p>
      <span class="header">
        <em style="color:red;font-size:15px;"></em>&nbsp;
        <font-awesome-icon :icon="['fas', 'hat-cowboy']" />&nbsp;标题
      </span>
      <span>可输入20个字</span>
    </p>

    <form action="#" method="post">
      <br />
      <input type="text" placeholder="可输入20个字" id="re_username" />
      <br />
      <br />
      <br />
      <br />

      <span class="header">
        <font-awesome-icon :icon="['fas', 'hashtag']" />&nbsp;&nbsp;标签
      </span>
      <span>添加标签增加关联！</span>

      <input type="text" placeholder="创建标签" id="re_username" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="header">
        <font-awesome-icon :icon="['fas', 'book']" />&nbsp;&nbsp;&nbsp;简介
      </div>

      <input type="text" placeholder="介绍一下内容" id="re_username" />
    </form>
    <div class="send-button">
      <form>
        <input type="button" value="发布内容" id="register" />
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "UploadInfo",
};
</script>

<style scoped>
.header {
  font-size: 20px;
  color: #333;
  font-weight: 400;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
}
.dropdown:hover .dropdown-content {
  display: block;
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
  /* height: 400px; */
  line-height: 200px;
  letter-spacing: 4px;
  color: #ffffff;
}

h2 {
  font-size: 25px;
  text-align: left;
  color: rgb(0, 0, 0);
  font-weight: 100;
  margin-bottom: 20px;
}

ul.tick {
  list-style: none;
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
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

input[type="text"] {
  width: 93.4%;
  margin-bottom: 20px;
  padding: 10px;
  float: left;
  background-color: transparent;
  border: none;
  font-size: 15px;
  border-bottom: 1px solid rgba(238, 238, 238, 0.41);
  outline: none;
  color: rgb(22, 22, 22);
}

.send-button {
  margin-bottom: 20px;
}

.send-button input[type="button"] {
  width: 60%;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 100;
  background-color: #fb7299;
  color: rgb(250, 250, 250);
  border: 1px solid rgba(255, 58, 58, 0.41);
  border-width: thin;
  cursor: pointer;
  outline: none;
  transition: 0.5s all;
  text-decoration: none;
}

.send-button input[type="button"]:hover {
  background-color: #ec4556;
  border: 1px solid #fff;
  color: #fff;
  transition: 0.5s all;
  text-decoration: none;
}

.register clearfix{
  margin:0 auto
}
</style>