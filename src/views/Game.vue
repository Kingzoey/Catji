<template>
  <div class="Game">
    <title>圈小猫</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <div align="center">
      <p align="left"></p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div id="catch-the-cat"></div>
    </div>

    <div class="style6" align="center" style="width: 100%; height: 64%;">
      <p id="time" class="style7">0</p>
      <div id="loadad"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import NavBar2 from "@/components/NavBar.vue";
//export default {
//  name: "Tag",
//  components: {
//    NavBar2,
//  },
//};
</script>
<!--
<script src="../js/phaser.min.js"></script> 
<script src="../js/catch-the-cat.js"></script> 
-->
<script>
var myVar = setInterval(myTimer, 1000);
var time = 0;
function myTimer() {
  time += 1;
  document.getElementById("time").innerHTML = time;
}
window.game = new CatchTheCatGame({
  w: 11,
  h: 11,
  r: 20,
  backgroundColor: 16777215,
  parent: "catch-the-cat",
  statusBarAlign: "center",
  credit: "圈小猫",
});
</script> 

<style scoped type="text/css">
BODY {
  margin: 0px;
  background-color: #000000;
}
BODY {
  color: #ffffff;
  font-family: Comic Sans MS;
  background-image: url(../assets/bg.jpg);
  background-repeat: repeat;
  background-color: #d9d9d9;
}
TD {
  color: #ffffff;
  font-family: Comic Sans MS;
}
TH {
  color: #ffffff;
  font-family: Comic Sans MS;
}
.style6 {
  font-weight: bold;
  font-size: 12px;
}
.style7 {
  font-size: 18px;
}
.style8 {
  font-size: 12px;
}
.style9 {
  font-size: 24px;
  font-family: "楷体_GB2312";
}
.style10 {
  color: #ff0000;
}
body,
td,
th {
  color: #666;
}
a {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  color: #666;
}

a:link {
  text-decoration: none;
  color: #06f;
}

a:visited {
  text-decoration: none;
  color: #09f;
}

a:hover {
  text-decoration: none;
  color: #09f;
}

a:active {
  text-decoration: none;
  color: #09f;
}
</style> 