
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
.m-main-nav
{
  text-align: center;
  margin-bottom: 100px;
}
/* card */

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
</style>
