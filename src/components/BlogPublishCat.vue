<template>
  <div class="publish-wrap">
    <div class="content">
      <el-input type="textarea" placeholder="云上的吸猫，你我共享" v-model="blog.content" action="#"></el-input>
    </div>
    <div class="bottom-bar">
      <div class="toolbar">
        <div class="tool-btn emoji" @click="handleEmoji">
          <font-awesome-icon :icon="['fas', 'laugh']" />&emsp;
        </div>
        <div class="tool-btn tag" @click="handleTag">
          <font-awesome-icon :icon="['fas', 'hashtag']" />&emsp;&emsp;
        </div>
        <!-- 要将父布局的position设置为relative，父布局将无法包裹input -->
        <div class="tool-btn image">
          <!--设置input的position为absolute，使其不按文档流排版，并设置其包裹整个布局 -->
          <!-- 设置opactity为0，使input变透明 -->
          <!-- 只接受jpg，gif和png格式 -->
          <el-upload
            action="javascript:void(0);"
            :auto-upload="false"
            accept="image/gif, image/jpg, image/png"
            multiple
            :limit="9"
            :file-list="blog.images"
            :show-file-list="false"
            list-type="picture"
            :on-change="handleChange"
          >
            <font-awesome-icon :icon="['fas', 'camera']" />
          </el-upload>
        </div>
        <div id="imgContainer" style="margin-top: 10px;"></div>

        <!---->
        <!---->
      </div>
      <div class="submit-btn">
        <button class="publish-btn" @click="onSubmit">发布</button>
      </div>
    </div>
    <div class="img-container">
      <span
        style="margin-right: 10px;"
        v-for="(file, index) in blog.images"
        :key="file.url"
        @click="handleClick(index)"
      >
        <el-avatar shape="square" :size="100" fit="contain" :src="file.url" />
      </span>
    </div>
  </div>
</template>

<script>
import { postBlog } from "../api";
export default {
  name: "BlogPublish",
  data() {
    return {
      blog: {
        content: "",
        images: [],
      },
    };
  },
  methods: {
    handleChange(file, fileList) {
      this.blog.images = fileList;
    },
    handleClick(index) {
      console.log(index);
      this.blog.images.splice(index, 1);
    },
    handleEmoji() {
      this.$message.info("表情正在添加中");
    },
    handleTag() {
      this.blog.content += "#在此处添加tag#";
    },
    async onSubmit() {
      if (!this.$store.state.user.usid) {
        this.$message.error("没有登录不能发表动态");
        return;
      }
      if (this.blog.content.length === 0) {
        this.$message.error("动态内容不能为空");
        return;
      }
      let rawImages = this.blog.images.map((image) => image.raw);
      try {
        let res = await postBlog(this.blog.content, rawImages, true);
        res = res.data;
        if (res.status === "ok") {
          this.blog = {};
          this.$message.info("动态发表成功");
        } else {
          this.$message.error("网络错误: " + res.status);
        }
      } catch (e) {
        this.$message.error("网络错误: " + e.response.data.status);
      }
    },
  },
};
</script>

<style scoped>
.content {
  background-color: transparent;
  border: none;
  font-size: 15px;
  border-bottom: 1px solid #fff;
  outline: none;
  color: rgb(22, 22, 22);
}

.publish-wrap {
  position: relative;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
}
.toolbar {
  font-size: 30px;
  display: flex;
}

.submit-btn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.publish-btn {
  width: 70px;
  height: 32px;
  outline: none;
  background-color: rgb(232, 248, 255);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.5s;
}
.bottom-bar {
  margin-top: 10px;
  display: flex;
  align-content: center;
  justify-content: space-between;
}

.publish-btn:hover {
  background-color: rgb(151, 224, 255);
}
.tool-btn:hover {
  color: rgb(151, 224, 255);
}
.tool-btn {
  color: rgb(232, 248, 255);
  margin-right: 15px;
  cursor: pointer;
  transition: color 0.5s;
}
.img-container {
  margin-top: 10px;
}
</style>