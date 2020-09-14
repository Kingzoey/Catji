<template>
  <div class="video-comment">
    <div class="comment-head">
      <span>{{comment_num}} 条评论</span>
    </div>
    <div class="comment-body">
      <div class="cb-send" :class="{'no-login':!$store.state.user.usid}">
        <div class="send-avatar">
          <img v-if="!$store.state.user.avatar" src="//static.hdslb.com/images/member/noface.gif" />
          <router-link :to="/space/ + $store.state.user.usid" v-else>
            <img :src="$store.state.user.avatar" />
          </router-link>
        </div>
        <div class="send-input">
          <div class="baffle-wrap">
            <div class="baffle">
              请先
              <router-link to="/login" class="baffle-login">登录</router-link>后发表评论 (・ω・)
            </div>
          </div>
          <textarea
            cols="80"
            name="msg"
            rows="5"
            placeholder="发条友善的评论"
            class="send-textarea"
            v-model="content"
          ></textarea>
          <button type="submit" class="send-submit">发表评论</button>
        </div>
      </div>
      <div class="cb-list">
        <div class="item" v-for="item in comments" :key="item.vcid">
          <div class="item-avatar">
            <router-link :to="/space/ + item.user.usid">
              <img :src="item.user.avatar" />
            </router-link>
          </div>
          <div class="item-right">
            <div class="item-user">
              <router-link :to="/space/ + item.usid">{{item.user.name}}</router-link>
            </div>
            <p class="item-text">{{item.content}}</p>
            <div class="item-info">
              <span class="time">{{item.create_time}}</span>
              <span class="like">
                <font-awesome-icon :icon="['fas', 'thumbs-up']" />
                {{item.like_num}}
              </span>
              <span class="reply">
                <font-awesome-icon :icon="['fas', 'comment-alt']" />&nbsp;回复
              </span>
            </div>
            <div class="item-reply">
              <div class="rtem" v-for="rtem in item.replys" :key="rtem.vcid">
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
      <Pager :onChange="getData"></Pager>
    </div>
  </div>
</template>

<script>
import Pager from "@/components/Pager.vue";
export default {
  name: "VideoComment",
  components: {
    Pager,
  },
  data() {
    return {
      cur_page: 1,
      tot_page: 10,
      jmp_page: "",
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
            {
              vcid: 12,
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
            {
              vcid: 13,
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
        {
          vcid: 2,
          content: "好好!",
          user: {
            usid: 2,
            name: "王小明",
            avatar: "//static.hdslb.com/images/member/noface.gif",
          },
          like_num: 987,
          create_time: "2020-2-20 00:01",
        },
        {
          vcid: 3,
          content: "好好好!",
          user: {
            usid: 3,
            name: "王小明",
            avatar: "//static.hdslb.com/images/member/noface.gif",
          },
          like_num: 987,
          create_time: "2020-2-20 00:01",
        },
        {
          vcid: 4,
          content: "好好好好!",
          user: {
            usid: 4,
            name: "王小明",
            avatar: "//static.hdslb.com/images/member/noface.gif",
          },
          like_num: 987,
          create_time: "2020-2-20 00:01",
        },
        {
          vcid: 5,
          content: "好好好好好!",
          user: {
            usid: 5,
            name: "王小明",
            avatar: "//static.hdslb.com/images/member/noface.gif",
          },
          like_num: 987,
          create_time: "2020-2-20 00:01",
        },
      ],
    };
  },
  methods: {
    getData(page) {
      let len = this.comments.length;
      this.comments = [
        ...this.comments.slice(page, len),
        ...this.comments.slice(0, page),
      ];
    },
  },
};
</script>

<style scoped>
.video-comment {
  margin-top: 20px;
  font-family: Microsoft YaHei, Arial, Helvetica, sans-serif;
  outline: none;
}

.comment-head {
  font-size: 18px;
  line-height: 24px;
  color: #222;
}

.comment-body {
  margin-top: 20px;
}

.cb-send {
  margin: 10px 0;
}

.send-avatar {
  float: left;
  margin: 7px 0 0 5px;
  position: relative;
}

.send-avatar img,
.item-avatar img,
.up-avatar img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.baffle {
  display: none;
}

.no-login .baffle {
  display: block;
  position: absolute;
  z-index: 102;
  width: 100%;
  top: 0;
  line-height: 64px;
  font-size: 12px;
  border-radius: 4px;
  text-align: center;
  color: #777;
  background-color: #e5e9ef;
  overflow: hidden;
}

.baffle-login {
  padding: 4px 9px;
  margin: 0 3px;
  color: #fff;
  background-color: #00a1d6;
  border-radius: 4px;
}

.baffle-login:hover {
  background-color: #00b5e5;
}

.send-input {
  position: relative;
  margin-left: 85px;
  margin-right: 80px;
}

.send-input textarea {
  font-size: 12px;
  display: inline-block;
  box-sizing: border-box;
  background-color: #f4f5f7;
  border: 1px solid #e5e9ef;
  overflow: auto;
  border-radius: 4px;
  color: #555;
  width: 100% !important;
  height: 65px;
  transition: 0s;
  padding: 5px 10px;
  line-height: normal;
  resize: none;
}

.send-submit {
  width: 70px;
  height: 64px;
  position: absolute;
  right: -80px;
  top: 0;
  padding: 4px 15px;
  font-size: 14px;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  min-width: 60px;
  vertical-align: top;
  cursor: pointer;
  background-color: #00a1d6;
  border: 1px solid #00a1d6;
  transition: 0.1s;
  user-select: none;
  outline: none;
}

.no-login .send-submit {
  cursor: default;
  background-color: #e5e9ef !important;
  border-color: #e5e9ef !important;
  color: #b8c0cc !important;
}

.cb-list {
  padding-top: 20px;
}

/* .item {
} */

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

.cb-page {
  margin: 20px 0;
  /* font-size: 12px; */
}

.cb-page * {
  box-sizing: content-box;
}

.cb-page .current,
.cb-page .tcd-number,
.cb-page .dian,
.cb-page .prev,
.cb-page .next {
  cursor: pointer;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: all 0.2s;
  font-size: 14px;
  min-width: 15px;
  margin: 0 2px;
  padding: 0 10px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  text-decoration: none;
  vertical-align: baseline;
}

.cb-page .current,
.cb-page .current:hover,
.cb-page .next:hover,
.cb-page .prev:hover,
.cb-page .tcd-number:hover {
  background: #00a1d6;
  color: #fff;
  border: 1px solid #00a1d6;
}

.cb-page .dian {
  cursor: default;
  border-color: #fff;
}

.cb-page .prev,
.cb-page .next {
  padding: 0 15px;
}

.cb-page .jump {
  float: right;
  color: #99a2aa;
  line-height: 36px;
}
.cb-page .jump input {
  margin: 0 5px;
  margin-top: 0px;
  padding: 0 10px;
  height: 24px;
  line-height: 24px;
  margin-top: 7px;
  font-size: 12px;
  box-shadow: none;
  width: 24px;
  border-radius: 4px;
  border: 1px solid #ddd;
  outline: none;
  text-align: center;
}
</style>