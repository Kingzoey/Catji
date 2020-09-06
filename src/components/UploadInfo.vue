<template>
  <div class="upload-info">
    <div class="header">
      <div>
        <font-awesome-icon :icon="['fas', 'hat-cowboy']" />&nbsp;标题
      </div>
      <input type="text" placeholder="可输入20个字" v-model="title" />
    </div>

    <div class="header">
      <div>
        <font-awesome-icon :icon="['fas', 'hashtag']" />&nbsp;&nbsp;&nbsp;&nbsp;标签
      </div>
      <input type="text" placeholder="创建标签" v-model="tags" />
    </div>

    <div class="header">
      <div>
        <font-awesome-icon :icon="['fas', 'cat']" />&nbsp;&nbsp;&nbsp;&nbsp;猫咪标签
      </div>
      <input type="text" placeholder="创建猫咪标签" v-model="catags" />
    </div>

    <div class="header">
      <div>
        <font-awesome-icon :icon="['fas', 'book']" />&nbsp;&nbsp;&nbsp;简介
      </div>
      <input type="text" placeholder="介绍一下内容" v-model="desc" />
    </div>
    <div class="send-button">
      <input type="button" value="发布内容" @click="send" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadInfo",
  data() {
    return {
      title: "",
      desc: "",
      tags: "",
      catags: "",
    };
  },
  methods: {
    send() {
      this.$emit("update:info", { title: this.title, desc: this.desc });
      this.$emit("upload");
    },
  },
};
</script>

<style scoped>
.header {
  font-size: 20px;
  color: #333;
  font-weight: 400;
  margin-bottom: 20px;
}
.send-button {
  text-align: center;
  padding: 10px 0;
}

input[type="text"] {
  width: 93.4%;
  padding: 10px;
  background-color: transparent;
  border: none;
  font-size: 15px;
  border-bottom: 1px solid rgba(238, 238, 238, 0.41);
  outline: none;
  color: rgb(22, 22, 22);
}

.send-button input[type="button"] {
  width: 60%;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 100;
  background-color: #fb7299;
  color: rgb(250, 250, 250);
  /* border: 1px solid rgba(255, 58, 58, 0.41); */
  /* border-width: thin; */
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s all;
}

.send-button input[type="button"]:hover {
  background-color: #ec4556;
  /* border: 1px solid #fff; */
  color: #fff;
}

.upload-info {
  margin: 0 auto;
  padding: 15px;
  /* height: 400px; */
}
</style>