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
          <span class="detail-link tc-slate">{{format(blog.create_time, 'yyyy-MM-dd')}}</span>
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

      <div class="cb-list">
        <div class="item" v-for="item in blog.comments" :key="item.vcid">
          <div class="item-right">
            <div class="item-reply">
              <div class="rtem" v-for="rtem in blog.comments" :key="rtem.vcid">
                <!-- 头像, 上左 -->
                <router-link class="rtem-avatar" :to="/space/ + rtem.user.usid">
                  <img :src="rtem.user.avatar" />
                </router-link>
                <!-- 名字, 内容, 上右 -->
                <div class="rtem-line">
                  <router-link class="rtem-user" :to="/space/ + rtem.user.usid">{{rtem.user.name}}</router-link>
                  <span class="rtem-text">{{rtem.content}}</span>
                </div>
                <!-- meta, 下方 -->
                <div class="rtem-info">
                  <span class="time">{{rtem.create_time}}</span>
                  <span class="like">
                    <font-awesome-icon :icon="['fas', 'thumbs-up']" />
                    {{rtem.like_num}}
                  </span>
                  <span class="reply">
                    <font-awesome-icon :icon="['fas', 'comment-alt']" />回复
                  </span>
                </div>
              </div>
            </div>
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
  blogContent,
  likeBlog,
  unlikeBlog,
  // likeBlogComment,
  // unlikeBlogComment,
} from "../api";
import BlogCardImage from "@/components/BlogCardImage.vue";
export default {
  name: "BlogCard",
  components: {
    BlogCardImage,
  },
  methods: {
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

      comment_num: 9999,
      comments: [
        {
          vcid: 1,
          content: "好!",
          user: {
            usid: 1,
            name: "王小明",
            avatar: "//static.hdslb.com/images/member/noface.gif",
          },
          like_num: 987,
          create_time: "2020-2-20 00:01",
          replys: [
            {
              vcid: 11,
              content: "好!",
              user: {
                usid: 1,
                name: "王小明",
                avatar: "//static.hdslb.com/images/member/noface.gif",
              },
              like_num: 987,
              create_time: "2020-2-20 00:01",
              replys: [],
            },
          ],
        },
      ],
    };
  },
  async mounted() {
    try {
      let res = await blogContent(false);
      res = res.data;
      if (res.status === "ok") {
        this.blogs = res.data;
      } else {
        this.$message.error("网络错误: " + res.status);
      }
    } catch (e) {
      this.$message.error("网络错误: " + e.data.response.status);
    }
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

.cb-list {
  padding-top: 20px;
  /* margin-left: 40px; */
}

.item-avatar img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.item-avatar {
  float: left;
  margin: 24px 0 0 5px;
  position: relative;
}

.item-right {
  position: relative;
  margin-left: 85px;
  padding: 22px 0 14px;
  border-top: 1px solid #e5e9ef;
}

.item:last-child .item-right {
  border-bottom: 1px solid #e5e9ef;
}

.item-user {
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  padding-bottom: 4px;
  display: block;
  word-wrap: break-word;
  position: relative;
}

.item-info,
.rtem-info {
  color: #99a2aa;
  line-height: 26px;
  font-size: 12px;
}

.item-info span,
.rtem-info span {
  margin-right: 20px;
}

.item-info .like,
.item-info .reply,
.rtem-info .like,
.rtem-info .reply {
  cursor: pointer;
}

.item-info .like:hover svg,
.item-info .reply:hover svg,
.rtem-info .like:hover svg,
.rtem-info .reply:hover svg {
  color: #00a1d6;
}

/* .item-reply{

} */

.rtem {
  padding: 10px 0;
}

.rtem-avatar {
  display: inline-block;
  position: relative;
  margin-right: 10px;
  vertical-align: top;
}

.rtem-avatar img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.rtem-line {
  display: inline-block;
  width: calc(100% - 34px);
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  padding-bottom: 4px;
  word-wrap: break-word;
  position: relative;
}

.rtem-user {
  position: relative;
  top: -1px;
}

.rtem-text {
  margin-left: 18px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-wrap;
}

.rtem-info {
  margin-left: 34px;
}
</style>
