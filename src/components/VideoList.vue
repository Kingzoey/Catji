<template>
  <div class="total">
    <div class="line1">
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频1" />
        </a>
        <br />
        <a title="视频1">视频1</a>
      </div>
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频2" />
        </a>
        <br />
        <a title="视频2">视频2</a>
      </div>
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频3" />
        </a>
        <br />
        <a title="视频3">视频3</a>
      </div>
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频4" />
        </a>
        <br />
        <a title="视频4">视频4</a>
      </div>
    </div>
    <div class="line2">
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频5" />
        </a>
        <br />
        <a title="视频5">视频5</a>
      </div>
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频6" />
        </a>
        <br />
        <a title="视频6">视频6</a>
      </div>
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频7" />
        </a>
        <br />
        <a title="视频7">视频7</a>
      </div>
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频8" />
        </a>
        <br />
        <a title="视频8">视频8</a>
      </div>
    </div>
    <div class="line3">
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频9" />
        </a>
        <br />
        <a title="视频9">视频9</a>
      </div>
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频10" />
        </a>
        <br />
        <a title="视频10">视频10</a>
      </div>
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频11" />
        </a>
        <br />
        <a title="视频11">视频11</a>
      </div>
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频12" />
        </a>
        <br />
        <a title="视频12">视频12</a>
      </div>
    </div>
    <div class="line4">
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频13" />
        </a>
        <br />
        <a title="视频13">视频13</a>
      </div>
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频14" />
        </a>
        <br />
        <a title="视频14">视频14</a>
      </div>
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频15" />
        </a>
        <br />
        <a title="视频15">视频15</a>
      </div>
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频16" />
        </a>
        <br />
        <a title="视频16">视频16</a>
      </div>
    </div>
    <div class="line5">
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频17" />
        </a>
        <br />
        <a title="视频17">视频17</a>
      </div>
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频18" />
        </a>
        <br />
        <a title="视频18">视频18</a>
      </div>
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频19" />
        </a>
        <br />
        <a title="视频19">视频19</a>
      </div>
      <div class="normal-item">
        <a class="cover" href="#" target="_blank">
          <img :src="test1" height="90" width="175" alt="视频20" />
        </a>
        <br />
        <a title="视频20">视频20</a>
      </div>
    </div>
    <div class="cb-page">
      <a @click="toPage(cur_page-1)" class="prev" v-if="cur_page > 1">上一页</a>
      <a @click="toPage(cur_page-3)" class="tcd-number" v-if="cur_page > 3">{{cur_page-3}}</a>
      <a @click="toPage(cur_page-2)" class="tcd-number" v-if="cur_page > 2">{{cur_page-2}}</a>
      <a @click="toPage(cur_page-1)" class="tcd-number" v-if="cur_page > 1">{{cur_page-1}}</a>
      <span class="current">{{cur_page}}</span>
      <a @click="toPage(cur_page+1)" class="tcd-number" v-if="cur_page+1 < tot_page">{{cur_page+1}}</a>
      <a @click="toPage(cur_page+2)" class="tcd-number" v-if="cur_page+2 < tot_page">{{cur_page+2}}</a>
      <span class="dian" v-if="cur_page+3 < tot_page">...</span>
      <a @click="toPage(tot_page)" class="tcd-number" v-if="cur_page < tot_page">{{tot_page}}</a>
      <a @click="toPage(cur_page+1)" class="next" v-if="cur_page < tot_page && tot_page > 1">下一页</a>
      <div class="jump">
        共
        <span>{{tot_page}}</span>页，
        跳至
        <input type="text" v-model="jmp_page" @keyup.enter="toPage(jmp_page)" />页
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "VideoComment",
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
    toPage(new_page) {
      new_page = Number(new_page);
      if (!new_page) return;
      this.cur_page = new_page;
      //   this.comments = [...this.comments, ...this.comments];
    },
  },
};
</script>


<script>
import test1 from "@/assets/test.png";
export default {
  name: "VideoList",
  data() {
    return {
      cur_page: 1,
      tot_page: 10,
      jmp_page: "",
      comment_num: 9999,
      test1: test1,     
    };
  },
  methods: {
    toPage(new_page) {
      new_page = Number(new_page);
      if (!new_page) return;
      this.cur_page = new_page;
      //   this.comments = [...this.comments, ...this.comments];
    },
  },
};
  
</script>

<style scoped>
.total {
  position: absolute;
  top: 60px;
  left: 300px;
}
.normal-item {
  float: left;
  border: 200px;
  margin-left: 50px;
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
