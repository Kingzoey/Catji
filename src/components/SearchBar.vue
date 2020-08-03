
<template>
  <div id="box">
    <input type="search" name="search" placeholder="请输入关键字" />
    <div id="search">搜索</div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style >
#box {
  width: 380px;
  margin: 30px auto;
  font-family: "Microsoft YaHei";
  font-size: 14px;
}

input {
  width: 260px;
  border: 1px solid #e2e2e2;
  height: 30px;
  float: left;
  /* background-image: url(images/search.jpg);*/
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: 5px center;
  padding: 0 0 0 40px;
}

#search {
  width: 78px;
  height: 32px;
  float: right;
  background: black;
  color: white;
  text-align: center;
  line-height: 32px;
  /* cursor: pointer;*/
}
</style>
