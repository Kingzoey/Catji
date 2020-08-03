<template>
  <div class="main-content clearfix">
    <div class="left-column">
      <div class="video-info">
        <h1 class="info-title">
          <span class="title" :title="video.title">{{video.title}}</span>
        </h1>
        <div class="info-meta">
          <span class="meta-view" :title="video.view_num + '次播放'">{{video.view_num}}播放 ·</span>
          <span class="meta-comment" :title="video.comment_num + '条评论'">{{video.comment_num}}评论</span>
          <span class="meta-time">{{video.upload_time}}</span>
        </div>
      </div>
      <div class="player-warp">
        <!-- <video-player
            class="video-player-box"
            ref="videoPlayer"
            :options="playerOptions"
            :playsinline="true"
            customEventName="customstatechangedeventname"
        ></video-player>-->
        <!-- @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)"
            @ended="onPlayerEnded($event)"
            @waiting="onPlayerWaiting($event)"
            @playing="onPlayerPlaying($event)"
            @loadeddata="onPlayerLoadeddata($event)"
            @timeupdate="onPlayerTimeupdate($event)"
            @canplay="onPlayerCanplay($event)"
            @canplaythrough="onPlayerCanplaythrough($event)"
            @statechanged="playerStateChanged($event)"
        @ready="playerReadied"-->
      </div>
      <div class="toolbar">
        <span class="like" :title="video.like_num + '次点赞'">
          <font-awesome-icon :icon="['fas', 'thumbs-up']" />
          {{video.like_num}}
        </span>
        <span class="favorite" :title="video.favorite_num + '次收藏'">
          <font-awesome-icon :icon="['fas', 'star']" />
          {{video.favorite_num}}
        </span>
        <span class="share" :title="video.share_num + '次分享'">
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
      <VideoComment />
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
          <div class="up-follow">
            <span>
              <font-awesome-icon :icon="['fas', 'plus']" />&nbsp;&nbsp;&nbsp;&nbsp;关注
              <span>{{video.up.follow_num}}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="rec">
        <div class="rec-head">视频推荐</div>
        <div class="rec-list">
          <div class="rectem" v-for="rectem in recs" :key="rectem.vid">
            <!-- 封面, 左侧 -->
            <div class="rectem-cover">
              <router-link :to="/video/ + rectem.vid">
                <img :src="rectem.cover" width="168" height="95" />
              </router-link>
            </div>
            <!-- 信息, 右侧 -->
            <div class="rectem-info">
              <div class="rectem-title">
                <router-link :to="/video/ + rectem.vid">{{rectem.title}}</router-link>
              </div>
              <div class="rectem-up">
                <router-link :to="/space/ + rectem.up.usid">{{rectem.up.name}}</router-link>
              </div>
              <div class="rectem-count">{{rectem.view_num}} 播放 · {{rectem.comment_num}} 弹幕</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoComment from "@/components/VideoComment.vue";
export default {
  name: "Video",
  components: {
    VideoComment,
  },
  beforeMount() {
    console.log(this.$route.params.vid);
  },
  data() {
    return {
      expand: false, // 视频描述部分的"展开"按钮
      video: {
        vid: 100000,
        title: "震惊！某上海985大学假期竟对学生做出这种要求",
        desc:
          "震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n",
        cover: "//static.hdslb.com/images/member/noface.gif",
        view_num: 9999,
        comment_num: 9999,
        upload_time: "2020-02-02 12:00:01",
        url:
          "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
        like_num: 8888,
        favorite_num: 7777,
        share_num: 6666,
        tags: [
          { name: "震惊", tag_id: 1 },
          { name: "985", tag_id: 2 },
          { name: "这是一个很长很长很长很长很长的tag", tag_id: 3 },
        ],
        up: {
          usid: 1,
          name: "王小明",
          desc: "21岁, 是学生",
          follow_num: 9876,
          avatar: "//static.hdslb.com/images/member/noface.gif",
        },
      },
      recs: [
        {
          vid: 100000,
          title: "震惊！某上海985大学假期竟对学生做出这种要求",
          desc:
            "震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n",
          cover: "//static.hdslb.com/images/member/noface.gif",
          view_num: 9999,
          comment_num: 9999,
          upload_time: "2020-02-02 12:00:01",
          like_num: 8888,
          favorite_num: 7777,
          up: {
            usid: 1,
            name: "王小明",
          },
        },
        {
          vid: 100001,
          title: "震惊！某上海985大学假期竟对学生做出这种要求",
          desc:
            "震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n",
          cover: "//static.hdslb.com/images/member/noface.gif",
          view_num: 9999,
          comment_num: 9999,
          upload_time: "2020-02-02 12:00:01",
          like_num: 8888,
          favorite_num: 7777,
          up: {
            usid: 1,
            name: "王小明",
          },
        },
        {
          vid: 100002,
          title: "震惊！某上海985大学假期竟对学生做出这种要求",
          desc:
            "震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n震惊！某上海985大学假期竟对学生做出这种要求\n",
          cover: "//static.hdslb.com/images/member/noface.gif",
          view_num: 9999,
          comment_num: 9999,
          upload_time: "2020-02-02 12:00:01",
          like_num: 8888,
          favorite_num: 7777,
          up: {
            usid: 1,
            name: "王小明",
          },
        },
      ],
      liked: false,
      favorited: false,
      playerOptions: {
        // videojs options
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            // type: "video/mp4",
            // src: this.video.url,
          },
        ],
        poster: "/static/images/author.jpg",
      },
    };
  },
  methods: {},
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

.player-warp {
  width: 763px;
  height: 517px;
  overflow: hidden;
  background-color: #212121;
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