
<template>
  <!--话题结果-->
  <div
    class="card-topic s-mt28"
    id="pl_topic_header"
    objectid="1022:2315223416241c875fe8526024a1716f70fd69"
  >
    <div class="card-topic-a" node-type="topicSmall">
      <img src="//wx1.sinaimg.cn/thumb180/00000a57ly9fs0olacvpbj2050050wg1.jpg" class="spic" />
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
    <div class="m-main-nav">
      <li>
        <a class="cur" href="/" title="视频">视频</a>
      </li>
      <li>
        <a href="/" title="动态">动态</a>
      </li>
      <li>
        <a href="/" title="猫咪">猫咪</a>
      </li>
      <li>
        <a href="/" title="Tag">Tag</a>
      </li>
    </div>
    <!--/话题头部主导航-->
  </div>
</template>

<script>
</script>

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
  border-bottom: 1px solid #eee;
  padding: 0 12px 0 11px;
}
.card-top .title {
  font-weight: normal;
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

/*----style----*/
/* 自定义字体图标 */
/*
@font-face {
  font-family: "wbicon";
  src: url("font/wbficon.eot?v=20181128") format("embedded-opentype"),
    url("font/wbficon.svg?v=20181128") format("svg"),
    url("font/wbficon.woff?v=20181128") format("woff"),
    url("font/wbficon.ttf?v=20181128") format("truetype");
  src: url("font/wbficon.eot?v=20181128") \9;
  font-weight: normal;
  font-style: normal;
}
*/
.wbicon {
  font-family: "wbicon" !important;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
}
/* 水平线 */
.s-hr {
  height: 1px;
  background: #ddd;
}
/* button */
.s-btn-a,
.s-btn-b,
.s-btn-c,
.s-btn-d,
.s-btn-e,
.s-btn-f,
.s-btn-g,
.s-btn-h {
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  border-radius: 2px;
  padding: 0 10px;
}
.s-btn-a {
  font-size: 12px;
  min-width: 40px;
  height: 26px;
  line-height: 26px;
  background: #f85d00;
  color: #fff;
}
.s-btn-a:hover {
  color: #fff;
  background: #cc560e;
}
.s-btn-a.disable {
  background: #ffc09f;
  color: #fff;
  cursor: default;
}
.s-btn-b {
  font-size: 16px;
  min-width: 100px;
  height: 36px;
  line-height: 36px;
  background: #f85d00;
  color: #fefefe;
}
.s-btn-b:hover {
  color: #fff;
  background: #cc560e;
}
.s-btn-c {
  font-size: 12px;
  min-width: 40px;
  height: 24px;
  line-height: 25px;
  border: 1px solid #d9d9d9;
  background: #fff;
}
.s-btn-d {
  font-size: 12px;
  min-width: 30px;
  height: 22px;
  line-height: 22px;
  background: #ff8140;
  color: #fff;
}
.s-btn-d:hover {
  color: #fff;
  background: #cc560e;
}
.s-btn-e {
  min-width: 40px;
  height: 20px;
  line-height: 20px;
  padding: 0 5px;
  border: 1px solid #d9d9d9;
  background: #fff;
}
.s-btn-f {
  font-size: 14px;
  min-width: 80px;
  height: 38px;
  line-height: 38px;
  background: #09f;
  color: #fff;
}
.s-btn-f:hover {
  background: #09d;
  color: #fff;
}
.s-btn-g {
  font-size: 14px;
  min-width: 60px;
  height: 30px;
  line-height: 30px;
  background: #f85d00;
  color: #fff;
}
.s-btn-g:hover {
  color: #fff;
  background: #cc560e;
}
.s-btn-g.disable {
  background: #ffc09f;
  color: #fff;
  cursor: default;
}
.s-btn-h {
  font-size: 14px;
  min-width: 80px;
  height: 38px;
  line-height: 38px;
  background: #fff;
  border: 1px solid #d9d9d9;
  box-shadow: 0 1px 1px #ececec;
}
.s-btn-h:hover {
  color: inherit;
  border: 1px solid #ccc;
}
/* tag */
.s-tag-a {
  padding: 4px 6px 3px 6px;
  background: #fff;
  color: #999;
  border: 1px solid #ddd;
  font-weight: 100;
  font-size: 12px;
}
/* 位置 */
.s-fl {
  float: left;
}
.s-fr {
  float: right;
}
.s-tac {
  text-align: center;
}
/* 边距 */
.s-mt7 {
  margin-top: 7px;
}
.s-ml15 {
  margin-left: 15px;
}
.s-mlr16 {
  margin: 0 16px;
}
.s-mt28 {
  margin-top: 28px;
}
.s-mb10 {
  margin-bottom: 10px;
}
.s-mb20 {
  margin-bottom: 20px;
}
.s-mb16l40 {
  margin: 0 0 16px 40px;
}
.s-mr16l58 {
  margin: 0 16px 0 58px;
}
.s-no-mr {
  margin-right: 0;
}
.s-pg10 {
  padding: 10px;
}
.s-pg12 {
  padding: 12px;
}
.s-pg6 {
  padding: 6px;
}
.s-pg16 {
  padding: 16px;
}
.s-pb16 {
  padding-bottom: 16px;
}
.s-pb15 {
  padding-bottom: 15px;
}
.s-ptb10 {
  padding: 10px 0;
}
.s-pt20b40 {
  padding: 20px 40px;
}
.s-pt16lr16 {
  padding: 16px 16px 0;
}
/* 字体 */
.s-fw-a {
  font-weight: bolder;
}
.s-color-a {
  color: #fa7d3c;
}
.s-color-b {
  color: #d05050;
}
.s-color-c {
  color: #fa7d3c;
}
.s-color-red {
  color: #ef4d58;
}
.s-color-green {
  color: #4ab666;
}
/* 边框 */
.s-brt1 {
  border-top: 1px solid #eee;
}
/* 背景 */
.s-bg-fff {
  background: #fff;
}
/* 滚动条 */
.s-scroll::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.s-scroll::-webkit-scrollbar-button:vertical {
  display: none;
}
.s-scroll::-webkit-scrollbar-button:vertical:start:increment,
.s-scroll::-webkit-scrollbar-button:vertical:end:decrement {
  display: none;
}
.s-scroll::-webkit-scrollbar-track:vertical {
  background-color: transparent;
}
.s-scroll::-webkit-scrollbar-track-piece {
  background-color: transparent;
}
.s-scroll::-webkit-scrollbar-thumb:vertical {
  background-color: #aaa;
  border: 2px solid #fff;
  border-width: 2px 2px 2px 0;
}
/* 形状 */
.s-arrow-t {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 12px solid #f2f2f5;
}
.s-drop-arrow,
.s-rise-arrow {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-left: -8px;
}
.s-drop-arrow em,
.s-rise-arrow em {
  display: block;
  width: 5px;
  height: 7px;
  margin: auto;
}
.s-drop-arrow em {
  background: #4ab666;
}
.s-rise-arrow em {
  background: #e05a5a;
}
.s-drop-arrow i,
.s-rise-arrow i {
  display: block;
  border-width: 7px;
  border-style: solid dashed dashed dashed;
  width: 0;
}
.s-drop-arrow i {
  border-color: #4ab666 transparent transparent transparent;
}
.s-rise-arrow i {
  border-color: #e05a5a transparent transparent transparent;
}
/* loading */
@-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes loading {
  0% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-o-keyframes loading {
  0% {
    -o-transform: rotate(0deg);
  }
  100% {
    -o-transform: rotate(360deg);
  }
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.s-loading {
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: -4px;
  margin-right: 4px;
  /*注释background: url(../img/loading_small.png) no-repeat;*/
  -webkit-animation: loading 0.8s linear infinite;
  -moz-animation: loading 0.8s linear infinite;
  -o-animation: loading 0.8s linear infinite;
  animation: loading 0.8s linear infinite;
}
@media only screen and (-webkit-min-device-pixel-ratio: 2), not all {
  /* 图标 */
  .icon-charity {
    /*注释background-image: url(../img/icon_v6_x2.png);*/
    background-size: 625px 325px;
  }
  .icon-vplus {
    /*注释background-image: url(../img/icon_v6_x2.png);*/
    background-size: 625px 325px;
  }
  .icon-reward {
    /*注释background-image: url(../img/icon_v6_x2.png);*/
    background-size: 625px 325px;
  }
}
/*From Now! */
/* 椤甸潰瀹瑰櫒 */
.m-main {
  width: 1000px;
  margin: 0 auto;
  padding-top: 76px;
}
/* 鎼滅储 */
.m-search {
  height: 36px;
}
.m-search .logo {
  float: left;
  width: 116px;
  height: 30px;
  margin-top: 3px;
  margin-right: 33px;
}

.m-search .searchbox {
  float: left;
}
.m-search .searchbox .search-input {
  float: left;
  position: relative;
}
.m-search .searchbox input {
  background: #fff;
  border: 1px solid #ddd;
  width: 572px;
  height: 34px;
  line-height: 28px;
  font-size: 20px;
  padding: 0 8px;
  border-radius: 2px;
}
.m-search .searchbox .s-btn-b {
  margin-left: 18px;
}
.m-search .action {
  float: right;
  padding-top: 14px;
}
.m-search .action a {
  margin-left: 20px;
}
/* 搴曢儴鎼滅储 */
.m-search-bottom {
  margin-bottom: 10px;
}
.m-search-bottom .search-input {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  width: 560px;
  height: 34px;
  float: left;
  padding: 0 8px;
  margin-right: 12px;
}
.m-search-bottom .search-input input {
  background: none;
  width: 100%;
  height: 36px;
  border: none;
  line-height: 28px;
  font-size: 20px;
}
/* 涓诲鑸� */
.m-main-nav {
  background: #fff;
}
.m-main-nav ul {
  width: 810px;
  margin: auto;
  height: 40px;
}
.m-main-nav li {
  display: inline-block;
  margin: 0 5.1%;
}
.m-main-nav li a {
  display: block;
  padding: 11px 10px 10px;
  font-size: 14px;
  color: #333;
}
.m-main-nav a:hover {
  color: #333;
  font-weight: bolder;
  border-bottom: 2px solid #f7691c;
}
.m-main-nav a.cur {
  border-bottom: 2px solid #f7691c;
  font-weight: bolder;
}
.wbs-intresting .m-main-nav li {
  margin: 0 3.7%;
}
/* 瀛愬鑸� */
.m-sub-nav {
  background: #fff;
  margin-bottom: 10px;
}
.m-sub-nav li {
  display: inline-block;
}
.m-sub-nav li a {
  display: block;
  width: 60px;
  height: 38px;
  line-height: 38px;
  text-align: center;
}
/* 鍐呭瀹瑰櫒 */
.m-wrap {
  margin-top: 10px;
  overflow: hidden;
}
.m-con-l {
  float: left;
  width: 690px;
}
.m-con-r {
  float: right;
  width: 300px;
}
/* 鎻愮ず鏉� */
.m-note {
  border-radius: 2px;
  margin-top: 10px;
  background: #fff8bf;
}
.m-note a {
  display: block;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: #eb7350;
}
.m-hint {
  margin: 10px 0;
  background: #feffe5;
  text-align: center;
  line-height: 27px;
  border: 1px solid #f9f2a7;
}
.m-hint a {
  color: #6097d6;
}
.m-hint .icon-warn {
  vertical-align: middle;
}
/* 楂樼骇鎼滅储绛涢€� */
.m-filtertab {
  background: #fff;
  margin-bottom: 10px;
  padding: 10px;
  height: 23px;
  line-height: 23px;
  border: 1px solid #eee;
}
.m-filtertab .tab-l {
  float: left;
}
.m-filtertab .tab-l .ctips {
  display: inline-block;
  float: left;
  background: #e6f2f8;
  margin: 0 5px 5px 0;
  padding: 0px 5px 0px 8px;
  border: solid 1px #d9e8ef;
  border-radius: 2px;
  line-height: 21px;
}
.m-filtertab .tab-l .ctips i {
  width: 11px;
  height: 11px;
  line-height: 11px;
  color: #0078b6;
  background: transparent;
  margin-left: 1px;
  vertical-align: 0;
  cursor: pointer;
}
.m-filtertab .tab-l .ctips i:hover {
  background: #0078b6;
  color: #fff;
}
.m-filtertab .filter-list > li {
  display: inline;
  border-right: 1px solid #ccc;
  padding-right: 8px;
  margin-right: 8px;
  position: relative;
}
.m-filtertab .filter-list li > span {
  color: #eb7350;
  cursor: pointer;
}
.m-filtertab .filter-list > li > span > ul {
  display: none;
  width: 68px;
  border: solid 1px #d3d3d3;
  background: #fff;
  padding: 1px;
  position: absolute;
  top: 15px;
  left: -8px;
  line-height: 100%;
  box-shadow: 0 0 4px #ccc;
}
.m-filtertab .filter-list li > span:hover ul {
  display: block;
}
.m-filtertab .filter-list > li > span > ul > li > a {
  display: block;
  padding: 8px 5px;
  color: #333;
}
.m-filtertab .filter-list > li > span > ul > li > a:hover {
  background: #eee;
  color: #eb7350;
}
.m-filtertab .tab-r {
  float: right;
}
.m-filtertab .tab-r a {
  margin-left: 10px;
}
/* 鍦板尯 */
.m-region {
  position: absolute;
  background: #fff;
  border: solid 1px #d3d3d3;
  box-shadow: 0 0 4px #ccc;
  width: 270px;
  padding: 10px;
}
.m-region .top {
  overflow: hidden;
  margin-bottom: 4px;
  padding-bottom: 5px;
  border-bottom: solid 1px #dbdbdb;
}
.m-region .top dt,
.m-region .top dd {
  display: inline-block;
}
.m-region .top dd {
  color: #eb7350;
}
.m-region .top dd i {
  width: 11px;
  height: 11px;
  line-height: 11px;
  color: #fff;
  background: #eb7350;
  margin-left: 1px;
  vertical-align: 0;
  cursor: pointer;
}
.m-region .list {
  overflow: hidden;
}
.m-region .list li {
  display: inline-block;
  min-width: 64px;
}
.m-region .list li a {
  display: inline-block;
  padding: 5px 7px;
  white-space: pre;
}
.m-region li a:hover {
  background: #eee;
  color: #eb7350;
}
/* 绾犻敊 */
.m-error {
  line-height: 27px;
  border: 1px solid #e4e7f8;
  background: #f8f9fe;
  margin-bottom: 10px;
  padding-left: 15px;
  color: #999;
}
.m-error a {
  color: #6097d6;
}
/* 搴曢儴鐗堟潈澶栭摼 */
.m-outlink {
  padding: 25px 0;
  margin: 0 auto;
  width: 1000px;
}
.m-outlink a,
.m-outlink select {
  color: #666;
}
.m-outlink .link {
  margin-bottom: 10px;
}
.m-outlink .link a {
  margin-right: 20px;
}
.m-outlink .copyright a,
.m-outlink .copyright select {
  margin-left: 20px;
}
/* 鎼滅储鍘嗗彶鑱旀兂 */
.m-sug-list {
  display: none;
  position: absolute;
  left: 0;
  top: 37px;
  z-index: 999;
  width: 100%;
  padding: 8px 10px 0;
  background: #fff;
  border: 1px solid #ddd;
  box-sizing: border-box;
  font-size: 14px;
}
.m-sug-list ul {
  /*margin: 0 10px;*/
}
.m-sug-list ul.history {
  padding-bottom: 10px;
}
.m-sug-list ul.hotrank {
  padding-top: 10px;
}
.m-sug-list .sug li {
  font-weight: bolder;
}
.m-sug-list li {
  height: 28px;
  overflow: hidden;
  line-height: 28px;
  cursor: pointer;
  margin: 0 -10px;
  padding: 0 10px;
}
.m-sug-list li:hover {
  background: #f5f5f5;
}
.m-sug-list .del {
  float: right;
  font-size: 16px;
  color: #999;
}
.m-sug-list .icon-clock {
  vertical-align: -2px;
  margin-right: 10px;
}
.m-sug-list .icon-num {
  display: inline-block;
  width: 14px;
  height: 14px;
  line-height: 14px;
  border-radius: 50%;
  color: #fff;
  font-size: 10px;
  text-align: center;
  vertical-align: 1px;
  margin-right: 10px;
  background: #d6d6d6;
}
.m-sug-list .icon-num.num-top {
  background: #f26d5f;
}
/*.m-sug-list ul.hotrank {
		padding-top: 10px;
		border-top: 1px solid #ddd;
	}*/
.m-sug-list .more {
  padding: 10px 0 15px;
}
/* 璇勮鍥炲 */
.m-review {
  overflow: hidden;
}
.m-review .list {
  overflow: hidden;
  margin-bottom: -1px;
}
.m-review .tab {
  margin: 6px 0 4px;
  padding: 12px 0 0;
  border-top: 1px solid #d9d9d9;
  overflow: hidden;
  line-height: 20px;
}
.m-review .tab span {
  float: right;
  color: #808080;
}
.m-review .tab ul {
  overflow: hidden;
  float: left;
  margin-left: -1px;
}
.m-review .tab ul li {
  float: left;
  margin: 5px 0;
  padding: 0 10px;
  border-left: 1px solid #d9d9d9;
  line-height: 10px;
}
.m-review .tab ul li a.cur {
  font-weight: bolder;
}
.m-review .msg {
  text-align: center;
  font-size: 14px;
  margin: 20px 0;
}
.m-review .msg .icon-warn {
  display: block;
  margin: 0 auto 6px;
}
/* 缈婚〉 */
.m-page {
  padding: 4px 0;
  text-align: center;
  margin-bottom: 10px;
  background: #fff;
  border: 1px solid #eee;
  position: relative;
}
.m-page .prev,
.m-page .next,
.m-page .pagenum {
  display: inline-block;
  padding: 0 8px;
  margin: 0 5px 0;
  text-align: center;
  vertical-align: middle;
}
.m-page .prev,
.m-page .next {
  width: 100px;
  height: 26px;
  line-height: 26px;
  padding-top: 2px;
  margin: 0;
}
.m-page .prev {
  border-right: 1px solid #d9d9d9;
  margin-right: 20px;
}
.m-page .next {
  border-left: 1px solid #d9d9d9;
  margin-left: 20px;
}
.m-page .list {
  position: relative;
  display: inline-block;
  height: 24px;
}
.m-page .list .pagenum {
  line-height: 20px;
}
.m-page .list ul {
  position: absolute;
  bottom: 30px;
  left: -13px;
  max-height: 280px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 99;
  border: 1px solid #cdcdcd;
  background: #fff;
  border-radius: 2px;
  padding: 2px;
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.2);
}
.m-page .list ul li {
  position: static;
  float: none;
  margin: 0;
  padding: 0;
  display: inline;
}
.m-page .list ul li a {
  white-space: nowrap;
  min-width: 50px;
  padding: 7px 13px;
  color: #333;
  display: block;
  cursor: pointer;
  text-decoration: none;
}
.m-page .list ul li.cur a,
.m-page .list ul li a:hover {
  background-color: #f2f2f5;
  text-decoration: none;
  color: #eb7350;
}
.m-page .result {
  float: left;
  color: #999;
  position: absolute;
  left: 14px;
  top: 12px;
}
/* 杩斿洖椤堕儴 */
.m-gotop {
  position: fixed;
  bottom: 120px;
  left: 50%;
  margin-left: 510px;
  display: block;
  width: 40px;
  height: 35px;
  padding-top: 5px;
  text-align: center;
  opacity: 0.4;
  background: #696e78;
}
.m-gotop:hover {
  opacity: 1;
}
.m-gotop a {
  display: inline-block;
  font-size: 20px;
  width: 26px;
  height: 30px;
  line-height: 30px;
  color: #fff;
}
/* 鑴氶儴 */
.m-footer {
  background: #fff;
  border-top: 1px solid #dedede;
}
/* 閬僵灞� */
.m-outer {
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  opacity: 0.3;
  filter: alpha(opacity=30);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
}
/* 寮瑰眰 */
.m-layer {
  position: absolute;
  background: #fff;
  border-radius: 3px;
  border-top: 2px solid #fa7f40;
  z-index: 1000;
}
.m-layer .header {
  border-bottom: 1px solid #f2f2f5;
  line-height: 38px;
  padding: 0 12px 0 16px;
  cursor: move;
}
.m-layer .header .title {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
}
.m-layer .header .close {
  font-size: 18px;
  float: right;
  color: #696e78;
}
.m-layer .header .close:hover {
  color: #eb7350;
}
.m-layer .inner {
  padding: 16px;
}
/* 纭瀵硅瘽妗� */
.m-confirm .para {
  font-size: 14px;
}
.m-confirm .para .icon-warn {
  vertical-align: middle;
  margin-right: 10px;
}
.m-confirm .btn-box {
  margin-top: 10px;
  margin-left: 200px;
}
.m-confirm .btn-box a {
  margin-left: 10px;
}
/* 璀﹀憡瀵硅瘽妗� */
.m-alert {
  min-width: 140px;
  text-align: center;
}
.m-alert .para {
  font-size: 16px;
}
.m-alert .icon-warn {
  vertical-align: middle;
  margin-right: 10px;
}
.m-alert .btn-box {
  margin-top: 10px;
}
/* 鏀惰棌鎻愮ず */
.m-tips {
  padding: 15px;
  box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
}
.m-tips .icon-warn {
  vertical-align: middle;
  margin-right: 4px;
}
.m-tips .btn-box {
  margin-top: 10px;
  margin-left: 80px;
}
.m-tips .btn-box a {
  margin-left: 10px;
}
/* 楂樼骇鎼滅储 */
.m-adv-search dl {
  margin-bottom: 10px;
  overflow: hidden;
}
.m-adv-search dt,
.m-adv-search dd {
  float: left;
  line-height: 25px;
}
.m-adv-search dt {
  width: 47px;
  margin-right: 10px;
  text-align: right;
  white-space: nowrap;
}
.m-adv-search dd [type="text"] {
  border: 1px solid #c6c6c6;
  height: 26px;
  padding: 0 4px;
  color: #666;
}
.m-adv-search dd .txt {
  width: 402px;
  font-size: 14px;
}
.m-adv-search dl.time [type="text"] {
  width: 84px;
  margin-right: 4px;
}
.m-adv-search dd label {
  margin-right: 10px;
}
.m-adv-search dd label [type="radio"] {
  vertical-align: -2px;
  margin-right: 3px;
}
.m-adv-search dd select {
  height: 28px;
  padding: 4px 4px;
  border: 1px solid #c6c6c6;
  color: #666;
  min-width: 94px;
  vertical-align: middle;
  margin-right: 4px;
}
.m-adv-search .btn-box {
  margin-top: 10px;
  margin-left: 56px;
}
.m-adv-search .btn-box a {
  margin-right: 10px;
}
/* 鐩磋揪 鐢靛奖骞冲垎 */
.m-movie-remark {
  display: inline-block;
  font-weight: bold;
}

.m-movie-remark .score {
  display: inline-block;
  font-size: 18px;
  margin-left: 4px;
  color: #ffa614;
  font-family: "Microsoft Yahei";
}
.m-movie-remark .lm {
  color: #f5b00b;
  margin-left: 10px;
}
.m-movie-remark .lm em {
  font-size: 16px;
  font-weight: normal;
}
/* 鍙戠淇� */
.m-send-msg dt,
.m-send-msg dd {
  float: left;
  line-height: 22px;
  margin-top: 16px;
}
.m-send-msg dt {
  clear: both;
}
.m-send-msg dd,
.m-send-msg dd .func .input-wrap {
  width: 410px;
}
.m-send-msg dd [type="text"] {
  width: 200px;
  border: 1px solid #e6e6e6;
  height: 26px;
  padding: 0 4px;
  color: #666;
}
.m-send-msg dd .func .input-wrap .input textarea {
  width: 398px;
}
/* 琛ㄦ儏 */
.m-layer-face {
  position: relative;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.2);
}
.m-layer-face .close {
  position: absolute;
  z-index: 2;
  right: 6px;
  top: 5px;
  font-size: 18px;
  color: #696e78;
}
.m-layer-face .close:hover {
  color: #eb7350;
}
.m-layer-face .face-box {
  width: 373px;
  padding: 26px 16px 15px;
}
.m-layer-face .face-box .tab {
  margin-bottom: 10px;
}
.m-layer-face .face-box .tab ul {
  display: inline-block;
  border: 1px solid #d9d9d9;
  border-left: 0;
  font-size: 12px;
  background: #f2f2f5;
}
.m-layer-face .face-box .tab ul li {
  float: left;
  height: 28px;
  border-left: 1px solid #d9d9d9;
}
.m-layer-face .face-box .tab ul li a {
  display: block;
  height: 28px;
  line-height: 28px;
  padding: 0 8px;
}
.m-layer-face .face-box .tab ul li a.cur {
  height: 27px;
  background: #fff;
  border-bottom: 2px solid #fa7d3c;
  font-weight: bolder;
}
.m-layer-face .face-box .face {
  position: relative;
  height: 218px;
}
.m-layer-face .face-box .face ul {
  padding: 1px 0 0 1px;
}
.m-layer-face .face-box .face .hot-face {
  margin-bottom: -1px;
}
.m-layer-face .face-box .face li {
  width: 26px;
  height: 22px;
  border: 1px solid #e8e8e8;
  overflow: hidden;
  margin: -1px 0 0 -1px;
  padding: 4px 2px;
  text-align: center;

  cursor: pointer;
  float: left;
}
.m-layer-face .face-box .face .hot-face li {
  background: #fffce4;
}
.m-layer-face .face-box .face li:hover {
  border: 1px solid #eb7350;
  background: #fff9ec;
  position: relative;
  z-index: 2;
}
.m-layer-face .face-box .face li img {
  width: 22px;
  height: 22px;
}
.m-layer-face .arrow {
  position: absolute;
  left: 7px;
  top: -11px;
}
.m-layer-face .arrow .br,
.m-layer-face .arrow .bg {
  display: inline-block;
  width: 0;
  height: 0;
}
.m-layer-face .arrow .br {
  border-bottom: 8px solid #ccc;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.m-layer-face .arrow .bg {
  border-bottom: 7px solid #fff;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  margin-left: -18px;
}
/* 鏃ユ湡鎺т欢 */
.m-caldr {
  border: 1px solid #ccc;
  padding: 5px;
  background: #fff;
  z-index: 1;
  width: 161px;
  height: auto;
  position: absolute;
  color: #000;
}
.m-caldr .selector {
  height: 24px;
  padding-top: 2px;
}
.m-caldr .selector .month,
.m-caldr .selector .year {
  float: left;
  font-size: 12px;
  width: 73px;
  border: 1px solid #ccc;
  height: 19px;
}
.m-caldr .selector .year {
  width: 78px;
  margin-left: 10px;
}
.m-caldr .weeks,
.m-caldr .days {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100% !important;
  width: 161px;
}
.m-caldr .weeks {
  height: 18px;
  margin-bottom: 2px;
  background: #b6d1f9;
  color: #fff;
  font-size: 12px;
}
.m-caldr .weeks li,
.m-caldr .days li {
  float: left;
  height: 18px;
  line-height: 18px;
  text-align: center;
  width: 23px;
}
.m-caldr .days {
  height: auto;
  font-size: 12px;
  font-family: Arial;
}
.m-caldr .days li a {
  display: block;
  text-decoration: none;
  height: 100%;
  color: #43609c;
}
.m-caldr .days li a:hover {
  background: #5d94e6;
  color: #fff;
}
/* 鍏虫敞鎴愬姛 */
.m-setup-group .remark {
  height: 24px;
  line-height: 24px;
  border-bottom: 1px dotted #ddd;
  padding-bottom: 15px;
  margin-bottom: 15px;
}
.m-setup-group [type="text"] {
  width: 200px;
  border: 1px solid #e6e6e6;
  height: 22px;
  padding: 0 4px;
  color: #666;
  vertical-align: middle;
}
.m-setup-group .top div {
  float: right;
  color: #999;
  position: relative;
  cursor: pointer;
}
.m-setup-group .icon-warn {
  vertical-align: middle;
  margin-right: 4px;
}
.m-setup-group .top .tips {
  display: none;
  z-index: 999;
  padding: 7px 10px;
  line-height: 17px;
  width: 200px;
  border: 1px solid #f9f2a7;
  background: #feffe5;
  border-radius: 3px;
  color: #333;
  position: absolute;
  right: 0;
  top: 30px;
}
.m-setup-group .top .tips .arrow-up {
  display: block;
  width: 19px;
  height: 10px;

  overflow: hidden;
  margin: 7px auto 0;
  position: absolute;
  top: -17px;
  left: 180px;
}
.m-setup-group .top div:hover .tips {
  display: block;
}
.m-setup-group .group {
  width: 392px;
  margin: 10px 0;
  padding: 10px;
  background: #f0f0f0;
  overflow: hidden;
}
.m-setup-group .group .list {
  overflow: hidden;
}
.m-setup-group .group .list li {
  float: left;
  width: 110px;
  height: 15px;
  line-height: 15px;
  padding: 6px 10px;
}
.m-setup-group .group .list li [type="checkbox"] {
  vertical-align: -2px;
  margin-right: 3px;
}
.m-setup-group .group .add {
  padding: 10px;
}
.m-setup-group .group .add > a {
  color: #eb7350;
}
.m-setup-group .group .add p {
  margin-top: 8px;
  color: #ef4d58;
}
.m-setup-group .btn-box {
  margin-top: 10px;
  text-align: right;
}
.m-setup-group .btn-box a {
  margin-left: 10px;
}
/* 鍐呭鏌ユ壘 */
.m-findcon .find {
  overflow: hidden;
}
.m-findcon .find dt,
.m-findcon .find dd {
  display: inline-block;
  vertical-align: text-top;
}
.m-findcon .find textarea {
  color: #808080;
  padding: 5px;
  width: 355px;
  height: auto;
  min-height: 68px;
  border: 1px solid #e6e6e6;
  margin-right: 10px;
}
.m-findcon .con-list {
  width: 500px;
  max-height: 400px;
  overflow: scroll;
  margin-top: 10px;
}
/* 杩涘害 */
.m-progress {
  overflow: hidden;
}
.m-progress .bar {
  width: 428px;
  height: 10px;
  margin: 8px 0 4px;
  border-radius: 5px;
  float: left;
}
.m-progress .bar div {
  height: 10px;
  background: #ea834c;
  border-radius: 5px;
}
/* @鐢ㄦ埛 */
.m-user-list {
  /*display: none;*/
  position: absolute;
  z-index: 999;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 2px;
  box-shadow: 1px solid #ccc;
}
.m-user-list li span,
.m-user-list li a {
  white-space: nowrap;
  min-width: 20px;
  font-size: 12px;
  padding: 7px 13px;
  line-height: 100%;
  display: block;
}
.m-user-list li a:hover {
  background: #f2f2f5;
}
</style>
