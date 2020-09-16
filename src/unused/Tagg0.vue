
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
              <a href="javascript:void(0);">#Catji#</a>
            </h1>
          </div>
          <div class="total">
            <span>阅读45.2亿</span>
            <span>讨论44.7万</span>
          </div>
        </div>
      </div>
    </div>
    <!--话题头部主导航-->
    <div class="m-main-nav">
    <header class="SearchResult-header">
      <span class="name"></span>
      <ul>
      <div class="more tab-switch">
        <li><div class="tab-switch-item" :class="{on : on == 0}" @click="on = 0">视频</div></li>
        <li><div class="tab-switch-item" :class="{on : on == 1}" @click="on = 1">动态</div></li>
        <li><div class="tab-switch-item" :class="{on : on == 2}" @click="on = 2">猫咪</div></li>
        <li><div class="tab-switch-item" :class="{on : on == 3}" @click="on = 3">Tag</div></li>
      </div>
      </ul>
    </header>
    <div class="SearchResult-wrap" v-for="(item, index) in curHotlist" :key="item.id+item.url">
      <span class="number" :class="{on : index < 2}">{{index + 1}}</span>
      <div class="preview" v-if="index < 2">
        <div class="pic">
          <router-link :to="item.url" class="link">
            <img :src="item.cover" :alt="item.title" />
          </router-link>
        </div>
        <div class="txt">
          <router-link :to="item.url" class="link">
            <p :title="item.title" class="title">{{item.title}}</p>
          </router-link>
        </div>
      </div>
      <router-link :to="item.url" class="link" v-else>
        <p :title="item.title" class="title">{{item.title}}</p>
      </router-link>
    </div>
  
    </div>
    <!--/话题头部主导航-->
  </div>
</template>


<script>
export default {
  name: "SearchResult",
  
  computed: {
    curHotlist() {
      if (this.on === 0) return this.videoHotList;
      else if (this.on === 1) return this.userHotList;
      else if (this.on === 2) return this.nekoHotList;
      else return this.tagHotList;
    },
  },
  data() {
    return {
      on: 0,
    };
  },
};
</script>


<style scoped>
.SearchResult-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  margin-bottom: 16px;
}

.m-main-nav
{
  text-align: center;
  margin-bottom: 100px;
}

.name {
  display: inline-block;
  color: #212121;
  vertical-align: bottom;
  font-size: 30px;
  line-height: 40px;
}

.more {
  display: inline-block;
  padding: 0 0 0 12px;
  color: #505050;
  text-align: center;
  transition: all 0.2s;
}

.tab-switch {
  display: flex;
}

.tab-switch-item {
  font-size: 15px;
  line-height: 40px;
  height: 30px;
  margin-right: 300px;
  cursor: pointer;
}

.tab-switch-item li a {
  color: #fff;
  display: block;
}
.tab-switch-item li a:hover {
  color:cornflowerblue;
}

.more .tab-switch li a {
  color: #fff;
  display: block;
}
.more .tab-switch li a:hover {
  color:cornflowerblue;
}

.tab-switch-item.on {
  border-bottom: 1px solid #00a1d6;
  color: #00a1d6;
}

.SearchResult-wrap {
  display: flex;
  position: relative;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 18px;
}

.number {
  font-size: 14px;
  color: #999;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  border-radius: 2px;
  display: inline-block;
}

.number.on {
  color: #fff;
  background: #00a1d6;
}


.title,
.preview {
  width: 235px;
}

.title {
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.preview {
  width: 235px;
  display: flex;
  position: relative;
  font-weight: 500;
}

.pic {
  position: relative;
}

.pic img {
  width: 112px;
  height: 63px;
  border-radius: 2px;
}

.txt {
  margin-left: 12px;
}
</style>
    

<style scoped>
/* card wrap */
.card-wrap {
  margin-bottom: 10px;
  border-radius: 2px;
  border: 1px solid #eee;
  background: #fff;
}
/* card */
.card {
}
/* card head */
.card-head {
  font-size: 14px;
  font-weight: normal;
  height: 38px;
  line-height: 38px;
  border-bottom: 1px solid #eee;
  padding: 0 12px 0 11px;
}
.card-head .title {
  font-weight: 700;
}
.card-head .more {
  font-size: 12px;
}
/* card top */
.card-top {
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid rgb(255, 253, 253);
  padding: 0 12px 0 11px;
}
.card-top .title {
  font-weight: normal;
}
/* card more */
.card-more-a a {
  border-top: 1px solid rgb(255, 255, 255);
  display: block;
  height: 35px;
  line-height: 35px;
  text-align: center;
}

/* card act */
.card-act {
  border-top: 1px solid #eee;
  overflow: hidden;
}
.card-act li {
  width: 25%;
  height: 38px;
  line-height: 38px;
  margin-left: -1px;
  float: left;
  text-align: center;
}
.card-act li a {
  display: block;
  height: 22px;
  line-height: 22px;
  margin: 7px 0;
  border-left-style: solid;
  border-left-width: 1px;
  border-color: #fdfdfd;
}
.card-act li a:hover .icon-act-praise {
  background-position: -125px -25px;
}
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
  padding: 26px 20px;
  border-bottom: 1px solid #e6e6e6;
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
/* 璇濋瀵艰 */
.card-topic-lead {
  padding: 16px;
  font-size: 14px;
  border-bottom: 1px solid #ebebeb;
}

@charset "utf-8";
/* 全局通用样式 */
/*html, body, div, ul, ol, li, dl, dt, dd, header, footer, hgroup, h1, h2, h3, h4, h5, h6, p, br, section, article, figure, figcaption, sup, img, a, span, i, b, small, em, strong, form, fieldset, legend, label, input, select, option, textarea, button, cite, menu, table, thead, tbody, tfoot, tr, th, td {
	margin: 0;
	padding: 0;
	font-weight: normal;
	font-size: 100%;
	font-style: normal;	
	line-height: 100%;
}*/
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
select,
option,
textarea,
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
/*橘黄色-Orange*/
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
input,
textarea,
select {
  border: 0;
  outline: none;
}
textarea {
  resize: none;
  font: 12px/1.125 Arial, Helvetica, sans-serif;
}
input[type="text"],
input[type="password"],
textarea {
  outline-style: none;
  -webkit-appearance: none;
}

/* 图标 */
</style>
