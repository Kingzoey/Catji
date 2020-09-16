<template>
  <div>
    <NavBar />
    <div class="main-content clearfix">
      <div class="left-column">
        <div class="video-info">
          <h1 class="info-title">
            <span class="title" :title="video.title">{{video.title}}</span>
          </h1>
          <div class="info-meta">
            <span class="meta-view" :title="video.view_num + '次播放'">{{video.view_num}}播放 ·</span>
            <span class="meta-comment" :title="video.comment_num + '条评论'">{{video.comment_num}}评论</span>
            <span class="meta-time">{{format(video.upload_time,'yyyy-MM-dd')}}</span>
          </div>
        </div>
        <div class="player-wrap">
          <div class="player" id="player" />
        </div>
        <div class="toolbar">
          <span
            class="like"
            :title="video.like_num + '次点赞'"
            :class="{on:video.ilike==1}"
            @click="like"
          >
            <font-awesome-icon :icon="['fas', 'thumbs-up']" />
            {{video.like_num}}
          </span>
          <span
            class="favorite"
            :title="video.favorite_num + '次收藏'"
            :class="{on:video.ifavorite==1}"
            @click="favorite"
          >
            <font-awesome-icon :icon="['fas', 'star']" />
            {{video.favorite_num}}
          </span>
          <span class="share" :title="video.share_num + '次分享'" @click="share">
            <font-awesome-icon :icon="['fas', 'share-square']" />
            {{video.share_num}}
          </span>
        </div>
        <div class="video-desc">
          <div class="desc-info" :class="{open : expand}">{{video.desc}}</div>
          <div class="expand-all" :class="{open : expand}" @click="expand = !expand">
            <span>
              {{expand ? '收起' : '展开全部'}}
              <font-awesome-icon :icon="['fas', (expand ? 'chevron-up' : 'chevron-down')]" />
            </span>
          </div>
        </div>
        <div class="video-tag clearfix">
          <ul>
            <li class="tag" v-for="item in video.tags" :key="item.tag_id">
              <router-link :to="/tag/ + item.tag_id">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
        <VideoComment :vid="Number(this.$route.params.vid)" />
      </div>
      <div class="right-column">
        <div class="video-up">
          <!-- up头像 -->
          <div class="up-avatar">
            <router-link :to="/space/ + video.up.usid">
              <img :src="video.up.avatar" width="48" height="48" />
            </router-link>
          </div>
          <!-- up名字, up介绍, 右上 -->
          <div class="up-info">
            <div class="up-name" style="line-height:20px;height:20px;">
              <router-link :to="/space/ + video.up.usid" class="username">{{video.up.name}}</router-link>
              <router-link :to="/message/ + video.up.usid" class="message">
                <font-awesome-icon :icon="['fas', 'envelope']" />&nbsp;私信
              </router-link>
            </div>
            <div class="up-desc">{{video.up.desc}}</div>
          </div>
          <!-- 关注up, 右下 -->
          <div class="up-btns">
            <div class="up-follow" :class="{on:video.up.ifollow==1}" @click="onFollow">
              <span>
                <template v-if="!video.up.ifollow">
                  <font-awesome-icon :icon="['fas', 'plus']" />&nbsp;&nbsp;&nbsp;&nbsp;关注
                </template>
                <template v-else>已关注&nbsp;&nbsp;</template>
                <span>{{video.up.follow_num}}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flvjs from "flv.js";
import DPlayer from "dplayer";
import NavBar from "@/components/NavBar.vue";
import VideoComment from "@/components/VideoComment.vue";
import {
  videoInfo,
  follow,
  unfollow,
  likeVideo,
  unlikeVideo,
  favoriteVideo,
  unfavoriteVideo,
} from "../api";
export default {
  name: "Video",
  components: {
    NavBar,
    VideoComment,
  },
  beforeCreate() {
    window.flvjs = flvjs;
  },
  mounted() {
    let vid = this.$route.params.vid;
    if (!vid) {
      this.$message.error("视频信息错误");
      return;
    }

    videoInfo(vid)
      .then((res) => {
        res = res.data;
        if (res.status === "ok") {
          this.video = res.data;
          this.dp = new DPlayer({
            container: document.getElementById("player"),
            video: {
              url: res.data.url,
              pic: res.data.cover,
            },
          });
        } else {
          this.$message.error("网络错误: " + res.status);
        }
      })
      .catch((e) => {
        this.$message.error("网络错误: " + e.response.data.status);
      });
  },
  beforeDestroy() {
    this.dp.destroy();
  },
  data() {
    return {
      dp: {},
      expand: false, // 视频描述部分的"展开"按钮
      video: {
        vid: 0,
        title: "加载中...",
        desc: "加载中...",
        cover: "",
        view_num: 0,
        comment_num: 0,
        upload_time: 0,
        url: "",
        like_num: 0,
        favorite_num: 0,
        share_num: 0,
        tags: [{ name: "加载中...", tag_id: 0 }],
        up: {
          usid: 0,
          name: "加载中...",
          desc: "加载中...",
          follow_num: 0,
          avatar: "",
          ifollow: 0,
        },
        ilike: 0,
        ifavorite: 0,
      },
    };
  },
  methods: {
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
    onFollow() {
      if (!this.$store.state.user.usid) {
        this.$message.error("登录后才能关注up主");
        return;
      }

      let up = this.video.up;
      if (this.$store.state.user.usid == up.usid) {
        this.$message.error("不能关注自己！");
        return;
      }
      if (up.ifollow) {
        unfollow(up.usid)
          .then(() => {
            up.ifollow = up.ifollow ? 0 : 1;
            up.follow_num--;
          })
          .catch((err) => {
            if (err.response.data.status === "未关注此人") {
              up.ifollow = 0;
            }
          });
      } else {
        follow(up.usid)
          .then(() => {
            up.ifollow = up.ifollow ? 0 : 1;
            up.follow_num++;
          })
          .catch((err) => {
            if (err.response.data.status === "已经关注此人") {
              up.ifollow = 1;
            }
          });
      }
    },
    like() {
      if (!this.$store.state.user.usid) {
        this.$message.error("登录后才能点赞视频");
        return;
      }
      let video = this.video;
      if (video.ilike) {
        unlikeVideo(video.vid)
          .then(() => {
            video.ilike = video.ilike ? 0 : 1;
            video.like_num--;
          })
          .catch((err) => {
            if (err.response.data.status === "未点赞") {
              video.ilike = 0;
            }
          });
      } else {
        likeVideo(video.vid)
          .then(() => {
            video.ilike = video.ilike ? 0 : 1;
            video.like_num++;
          })
          .catch((err) => {
            if (err.response.data.status === "已点赞") {
              video.ilike = 1;
            }
          });
      }
    },
    favorite() {
      if (!this.$store.state.user.usid) {
        this.$message.error("登录后才能收藏视频");
        return;
      }
      let video = this.video;
      if (video.ifavorite) {
        unfavoriteVideo(video.vid)
          .then(() => {
            video.ifavorite = video.ifavorite ? 0 : 1;
            video.favorite_num--;
          })
          .catch((err) => {
            if (err.response.data.status === "未收藏") {
              video.ifavorite = 0;
            }
          });
      } else {
        favoriteVideo(video.vid)
          .then(() => {
            video.ifavorite = video.ifavorite ? 0 : 1;
            video.favorite_num++;
          })
          .catch((err) => {
            if (err.response.data.status === "已收藏") {
              video.ifavorite = 1;
            }
          });
      }
    },
    share() {},
  },
};
</script>

<style scoped>
.main-content {
  display: flex;
  background-color: #fff;
  margin: 20px auto;
  max-width: 1660px;
  min-width: 988px;
  width: 1113px;
}

.left-column {
  width: 763px;
}

.right-column {
  width: 320px;
  flex: none;
  margin-left: 30px;
}

.video-info {
  margin-bottom: 16px;
}

.info-title {
  font-size: 18px;
  font-weight: 500;
  color: #212121;
  line-height: 26px;
  height: 26px;
  margin-bottom: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.title {
  vertical-align: middle;
}

.info-meta {
  margin-top: 11px;
  font-size: 12px;
  height: 16px;
  color: #999;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.info-meta span {
  display: inline-block;
  height: 16px;
  white-space: pre;
}

.meta-time {
  margin-left: 16px;
}

.video-desc {
  margin-top: 16px;
}

.player-wrap {
  width: 763px;
  height: 430px;
  overflow: hidden;
  background-color: #212121;
}

.player {
  width: 100%;
  height: 100%;
}

.toolbar {
  position: relative;
  margin-top: 16px;
  height: 28px;
  font-size: 14px;
  color: #505050;
  border-bottom: 1px solid #e5e9f0;
  padding-bottom: 12px;
  box-sizing: content-box;
}

.toolbar span {
  display: inline-block;
  position: relative;
  width: 92px;
  height: 30px;
  line-height: 30px;
  margin-right: 8px;
  color: #757575;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
}

.toolbar span:hover {
  color: #00a1d6;
}

.toolbar span.on {
  color: #00a1d6;
}

.toolbar span svg {
  vertical-align: top;
  margin-right: 6px;
  width: 24px;
  height: 24px;
}

.desc-info {
  white-space: pre-line;
  transition: all 0.3s;
  font-size: 12px;
  color: #212121;
  letter-spacing: 0;
  line-height: 18px;
  height: 63px;
  width: 573px;
  overflow: hidden;
}

.desc-info.open {
  height: auto;
}

.expand-all {
  margin-top: 12px;
  font-size: 12px;
  line-height: 18px;
}

.expand-all span {
  cursor: pointer;
  color: #505050;
}

.expand-all span:hover {
  color: #00a1d6;
}

.video-tag {
  margin-top: 16px;
  position: relative;
  clear: both;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e9ef;
}

.tag {
  float: left;
  margin: 0 10px 8px 0;
  background: #f4f4f4;
  border-radius: 100px;
  padding: 0 12px;
  position: relative;
  height: 22px;
  line-height: 22px;
  transition: all 0.3s;
  font-size: 12px;
  border: 1px solid #f4f4f4;
}

.tag:hover {
  border-color: #00a1d6;
}

.tag:hover a {
  color: #00a1d6;
}

.up-avatar {
  float: left;
  width: 48px;
  height: 48px;
  position: relative;
}

.up-avatar a {
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f4f5f7;
}

.up-info {
  margin-left: 16px;
  float: left;
}

.up-name {
  font-size: 14px;
  color: #00a1d6;
  line-height: 20px;
  height: 20px;
}

.up-name .message {
  margin-left: 12px;
  font-size: 12px;
  color: #505050;
  display: inline-block;
  vertical-align: middle;
}

.up-name .message:hover {
  color: #00a1d6;
}

.up-desc {
  margin-top: 4px;
  width: 256px;
  font-size: 12px;
  line-height: 16px;
  height: 16px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.up-btns {
  clear: both;
  display: flex;
  margin-left: 63px;
  white-space: nowrap;
}
.up-follow {
  box-sizing: border-box;
  padding: 0;
  line-height: 32px;
  height: 32px;
  border-radius: 2px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #00a1d6;
  color: #fff;
  width: 156px;
  border-color: #00b5e5;
  transition: 0.25s;
}

.up-follow:hover {
  background: #00b5e5;
  border-color: #00b5e5;
}

.up-follow.on {
  background: #ff799f;
  border-color: #ff6490;
}

.up-follow.on:hover {
  background: #ff6490;
  border-color: #ff6490;
}

.rec {
  margin-top: 20px;
}

.rec-head {
  font-size: 16px;
  color: #222;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.rectem {
  padding: 6px 0;
  display: flex;
}

.rectem-cover {
  position: relative;
  width: 141px;
  height: 80px;
  border-radius: 2px;
  background: #f4f5f7;
}

.rectem-cover img {
  width: 141px;
  height: 80px;
}

.rectem-info {
  margin-left: 10px;
}

.rectem-title {
  font-size: 14px;
  height: 36px;
  line-height: 18px;
  margin-bottom: 6px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
}

.rectem-title a:hover {
  color: #00a1d6;
}

.rectem-up {
  width: 160px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #999;
  font-size: 12px;
  display: inline-block;
  height: 16px;
}

.rectem-meta {
  display: inline-block;
  height: 16px;
  width: 100%;
  color: #999;
  font-size: 12px;
}
</style>