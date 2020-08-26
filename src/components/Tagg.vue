
<template>
  <!--话题结果-->
  <div
    class="card-topic s-mt28"
    id="pl_topic_header"
    objectid="1022:2315223416241c875fe8526024a1716f70fd69"
  >
    <div class="card-topic-a" node-type="topicSmall">
      <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3113236089,387341124&fm=26&gp=0.jpg" class="spic" />
      <div class="info">
        <div class="title">
          <h1>
            <a href="javascript:void(0);">#Catji#</a>
          </h1>
          <div>
            <a
              href="javascript:void(0);"
              class="s-btn-c"
              action-type="topicShare"
              action-data="uid=1736329970&title=分享&content=我分享了话题#nba比赛日#"
            >分享</a>
            <a
              href="/claim/apply?object_id=1022:2315223416241c875fe8526024a1716f70fd69&uid=2910965943&query=%23NBA%E6%AF%94%E8%B5%9B%E6%97%A5%23"
              class="s-btn-c"
              target="_blank"
            >申请主持人</a>
          </div>
        </div>
        <div class="total">
          <span>阅读45.2亿</span>
          <span>讨论44.7万</span>
        </div>
      </div>
    </div>
    <div class="card-topic-b" node-type="topicBig" style="display:none">
      <div class="pic" node-type="topicPic">
        <img src class="bpic" node-type="coverPic" />
      </div>
      <div class="tips" node-type="topicError" style="display:none">
        <p class="error">
          <i class="icon-warn-s"></i>上传失败，你的图片过小，需要上传1000x300像素以上的图片
        </p>
      </div>
      <div class="card-topic-a">
        <img src="//wx1.sinaimg.cn/thumb180/00000a57ly9fs0olacvpbj2050050wg1.jpg" class="spic" />
        <div class="info">
          <div class="title">
            <h1>
              <a href="javascript:void(0);">#NBA比赛日#</a>
            </h1>
            <div>
              <a
                href="javascript:void(0);"
                class="s-btn-c"
                action-type="topicShare"
                action-data="uid=1736329970&title=分享&content=我分享了话题#nba比赛日#"
              >分享</a>
              <a
                href="/claim/apply?object_id=1022:2315223416241c875fe8526024a1716f70fd69&uid=2910965943&query=%23NBA%E6%AF%94%E8%B5%9B%E6%97%A5%23"
                class="s-btn-c"
                target="_blank"
              >申请主持人</a>
            </div>
          </div>
          <div class="total">
            <span>阅读45.2亿</span>
            <span>讨论44.7万</span>
          </div>
        </div>
      </div>
    </div>
    <!--话题头部主导航-->
    <div class="container">
      <ul class="tab clearfix">
        <li
          class="tab-item"
          :class="{on:index==on}"
          v-for="(tab, index) in tablist"
          :key="tab.name"
        >
          <a href="javascript:void(0);" @click="on = index">
            <font-awesome-icon :icon="['fas', tab.iconname]" />
            {{tab.name}}
          </a>
        </li>
      </ul>
      <component :is="tablist[on].tab"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "Space",
  components: {},
  methods: {},
  data() {
    return {
      on: 0,
      tablist: [
        {
          name: "视频",
          iconname: "video",
          tab: () => import("@/components/VideoListtSearch.vue"),
        },
        {
          name: "动态",
          iconname: "blog",
          tab: () => import("@/components/BlogCardSearch.vue"),
        },
      ],
    };
  },
  mounted() {
    console.log(this.$route.params.usid);
  },
};
</script>

<style scoped>

* {
  margin: 5;
  padding: 0;
  list-style: none;
}

.container {
  padding: 50 50 50 50px;
  margin: left 500px;
}

.tab :hover {
  color: #5dceea;
}

.tab {
  font-weight: normal;
  font-size: 18px;
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
  border-bottom: 1px solid rgb(232, 248, 255);
}

.tab-item {
  margin: 16px auto;
  padding: 0 0 0 448px;
  overflow: visible;
  display: block;
  float: left;
}

.tab-item.on a {
  color: pink;
}

.tab-item a {
  overflow: visible;
  padding: 0 8px;
  border: none;
  font-weight: normal;
  font-size: 18px;

  height: 36px;
  margin-right: 4px;
  color: #999;
}

.tab-item a svg {
  color: #3a9bd9;
}

.tab-item.on a svg {
  color: pink;
}

.card {
  margin-left: 200px;
  margin-right: 200px;
}

/*修改*/

.m-main-nav
{
  text-align: center;
  margin-bottom: 100px;
}
/* card */

/* 璇濋 */
.card-topic {
  background: #fff;
}
.card-topic .icon-ad {
  vertical-align: -3px;
  margin-left: 10px;
}
.card-topic-a .up-pic,
.card-topic-b .up-pic {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 97px;
  height: 26px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
}
.card-topic-a .up-pic a,
.card-topic-b .up-pic a {
  display: block;
  text-align: center;
  line-height: 26px;
  color: #333;
  background: #fff;
}
.card-topic-a .up-pic input,
.card-topic-b .up-pic input {
  width: 97px;
  height: 26px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.card-topic-a {
  padding: 26px 200px;
  border-bottom: 1px solid rgb(232, 248, 255);
  position: relative;
}
.card-topic-a .spic,
.card-topic-a .info {
  display: inline-block;
  vertical-align: middle;
}
.card-topic-a .spic {
  border-radius: 3px;
  width: 70px;
  height: 70px;
  margin-right: 20px;
}
.card-topic-a .info .title {
  margin-bottom: 5px;
  height: 28px;
}
.card-topic-a .info .title h1,
.card-topic-a .info .title div {
  float: left;
}
.card-topic-a .info .title h1 {
  margin-right: 20px;
  font-size: 22px;
  font-weight: bolder;
}
.card-topic-a .info .title .s-btn-c {
  margin-right: 20px;
}
.card-topic-a .info .title span {
  position: relative;
}
.card-topic-a .info .title span .btn-cancel {
  position: absolute;
  top: 21px;
  left: 0;
  margin-right: 0;
  padding: 5px 19px;
  box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
}
.card-topic-a .info .total {
  font-size: 14px;
  color: #636363;
  margin-top: 10px;
}
.card-topic-a .info .total span {
  margin-right: 10px;
}
.card-topic-b {
  position: relative;
}
.card-topic-b .tips {
  width: 1000px;
  height: 300px;
  background: #f2f2f2;
  text-align: center;
}
.card-topic-b .tips .error {
  display: inline-block;
  height: 32px;
  padding: 0 20px;
  border-radius: 3px;
  background: #d9d9dc;
  background: rgba(0, 0, 0, 0.1);
  line-height: 32px;
  margin-top: 70px;
}
.card-topic-b .tips .error .icon-warn-s {
  margin-right: 5px;
  vertical-align: -4px;
}
.card-topic-b .pic {
  width: 1000px;
  height: 300px;
}
.card-topic-b .pic .bpic {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-topic-b .opt {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 99;
}
.card-topic-b .opt .rept-up {
  position: relative;
  color: #333;
}
.card-topic-b .opt .rept-up input {
  width: 70px;
  height: 26px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.card-topic-b .card-topic-a {
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 960px;
}
.card-topic-b .card-topic-a .info .title h1 a,
.card-topic-b .card-topic-a .total {
  color: #fff;
}
/* card-topic */
.card-topic-lead {
  padding: 16px;
  font-size: 14px;
  border-bottom: 1px solid rgb(232, 248, 255);
}

/* 全局通用样式 */
html,
body,
div,
ul,
ol,
li,
dl,
dt,
dd,
header,
footer,
hgroup,
h1,
h2,
h3,
h4,
h5,
h6,
p,
br,
section,
article,
figure,
figcaption,
sup,
img,
a,
span,
i,
b,
small,
em,
strong,
form,
fieldset,
legend,
label,
input,
button,
cite,
menu,
table,
thead,
tbody,
tfoot,
tr,
th,
td {
  margin: 0;
  padding: 0;
  font-style: normal;
}
body {
  font: 12px/1.3 Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
  overflow-x: hidden;
  color: #333;
  -webkit-font-smoothing: antialiased;
  background: #f7f7f7;
}
/*h1,h2,h3,h4,h5,h6 {
	font-family: "Microsoft YaHei";
}*/
a {
  color: #333;
}
a:hover {
  color: #eb7350;
}
a,
a:hover,
button,
input[type="submit"],
input[type="button"] {
  text-decoration: none;
  cursor: pointer;
  outline: none;
}
ul,
li {
  list-style: none;
}
button,
img,
fieldset,

/* button */
.s-btn-c {
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  border-radius: 2px;
  padding: 0;
}
.s-btn-c {
  font-size: 12px;
  min-width: 40px;
  height: 24px;
  line-height: 25px;
  border: 1px solid #d9d9d9;
  background: #fff;
}

.tagg {
  background-color: rgb(232, 248, 255);;
}
</style>
