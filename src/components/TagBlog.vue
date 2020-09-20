<template>
  <div>
    <div class="card" v-for="(blog, index) in blogs" :key="blog.bid">
      <router-link
        :to="/space/ + blog.up.usid"
        :style="'background-image:url('+blog.up.avatar+')'"
        class="user-head"
      ></router-link>
      <div class="main-content">
        <div class="user-name fs-16 ls-0 d-i-block">
          <router-link :to="/space/ + blog.up.usid" class>{{blog.up.name}}</router-link>
        </div>
        <div class="time fs-12 ls-0 tc-slate">
          <span class="detail-link tc-slate">{{format(blog.time, 'yyyy-MM-dd')}}</span>
        </div>
        <div class="card-content">
          <div class="text description">
            <div class="content">
              <div class="content-full">{{blog.content}}</div>
            </div>
          </div>
          <BlogCardImage :images="blog.images" />
        </div>
        <div class="button-bar tc-slate">
          <div class="single-button" @click="forward(index)">
            <span class="text-bar">
              <font-awesome-icon :icon="['fas', 'share-square']" />
              <span class="text-offset">{{blog.transmit_num||'转发'}}</span>
            </span>
          </div>
          <div class="single-button" @click="comment(index)">
            <span class="text-bar">
              <font-awesome-icon :icon="['fas', 'comment-alt']" />
              <i class="bp-svg-icon single-icon comment"></i>
              <span class="text-offset">{{blog.comment_num||'评论'}}</span>
            </span>
          </div>
          <div class="single-button" :class="{on:blog.ilike>0}" @click="like(index)">
            <span class="text-bar">
              <font-awesome-icon :icon="['fas', 'thumbs-up']" />
              <span class="text-offset">{{blog.like_num||'点赞'}}</span>
            </span>
          </div>
        </div>
      </div>
      <br />
    </div>
    <br />
  </div>
</template>

<script>
import {
  tagBlogs,
  likeBlog,
  unlikeBlog,
  // likeBlogComment,
  // unlikeBlogComment,
} from "../api";
import BlogCardImage from "@/components/BlogCardImage.vue";
export default {
  name: "BlogCardSearch",
  components: {
    BlogCardImage,
  },
  props: {
    tag_id: Number,
  },
  methods: {
    getData(page) {
      tagBlogs(this.$props.tag_id, page)
        .then((res) => {
          this.blogs = res.data.data;
        })
        .catch((err) => {
          this.$message.error("网络错误: " + err.response.data.status);
        });
    },
    forward(index) {
      this.$message.info("转载功能正在完善中...");
      index;
    },
    comment(index) {
      this.$message.info("评论功能正在完善中...");
      index;
    },
    like(index) {
      if (!this.$store.state.user.usid) {
        this.$message.error("登录后才能点赞视频");
        return;
      }
      let blog = this.blogs[index];
      if (blog.ilike) {
        unlikeBlog(blog.bid)
          .then(() => {
            blog.ilike = blog.ilike ? 0 : 1;
            blog.like_num--;
          })
          .catch((err) => {
            if (err.response.data.status === "Not already liked!") {
              blog.ilike = 0;
            }
          });
      } else {
        likeBlog(blog.bid)
          .then(() => {
            blog.ilike = blog.ilike ? 0 : 1;
            blog.like_num++;
          })
          .catch((err) => {
            if (err.response.data.status === "Already liked!") {
              blog.ilike = 1;
            }
          });
      }
    },
    format(timestamp, fmt) {
      var date = new Date(1000 * timestamp);
      var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds(), //毫秒
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      }
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
        }
      }
      return fmt;
    },
  },
  data() {
    return {
      blogs: [],
    };
  },

  mounted() {
    this.getData(0);
  },
};
</script>

<style scoped>
.card {
  position: relative;
  border-radius: 4px;
  min-width: 632px;
  background: #fff;
  margin-top: 8px;
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 700px;
  background-image: url(../assets/blogcardtop3.png);
}

.user-head {
  display: block;
  position: absolute;
  width: 48px;
  height: 48px;
  top: 24px;
  left: 24px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 50%;
}

.main-content {
  width: 534px;
  padding-top: 27px;
  margin-left: 88px;
}

.user-name a:hover {
  color: #00b5e5;
}

.time {
  padding-top: 4px;
}

.time .detail-link {
  transition: color 0.3s ease;
}

.card-content {
  width: 532px;
  margin-top: 10px;
  padding-right: 0;
  padding-bottom: 20px;
}

.description {
  max-width: 100%;
  display: inline-block;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 22px;
  word-wrap: break-word;
}

.content {
  display: block;
  color: inherit;
  padding-right: 10px;
}

.content-full {
  width: 100%;
  word-break: break-word;
  word-wrap: break-word;
}

.button-bar {
  width: 100%;
  height: 44px;
  line-height: 44px;
  color: #99a2aa;
}

.single-button {
  display: inline-block;
  margin-right: 70px;
  font-size: 12px;
  cursor: pointer;
}

.on,
.single-button:hover {
  color: #fb7299;
}

.text-offset {
  position: relative;
  top: 1px;
  left: 3px;
}
.page-wrap {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
