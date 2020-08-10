
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
        <a
          class="cur"
          href="/"
          title="视频"
        >视频</a>
      </li>
      <li>
        <a
          href="/"
          title="动态"
        >动态</a>
      </li>
      <li>
        <a
          href="/"
          title="猫咪"
        >猫咪</a>
      </li>
      <li>
        <a
          href="/"
          title="Tag"
        >Tag</a>
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
/* card more */
.card-more-a a {
  border-top: 1px solid #eee;
  display: block;
  height: 35px;
  line-height: 35px;
  text-align: center;
}
/* card feed */
.card-feed {
  padding: 16px;
  /*overflow: hidden;*/
}
.card-feed .avator {
  float: left;
  display: inline;
  width: 50px;
  padding: 3px 0 6px;
}
.card-feed .avator img {
  width: 50px;
  border-radius: 50%;
}
.card-feed .content {
  font-size: 14px;
  margin-left: 60px;
  line-height: 25px;
  word-break: break-word;
}
.card-feed .info .name {
  font-size: 14px;
  font-weight: 700;
}
.card-feed .info .menu {
  position: relative;
}
.card-feed .info .menu .wbicon {
  font-size: 18px;
  color: #696e78;
}
.card-feed .info .menu ul {
  display: none;
  position: absolute;
  z-index: 999;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 2px;
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.2);
  right: 6px;
  top: 18px;
}
.card-feed .info .menu ul li a {
  white-space: nowrap;
  min-width: 20px;
  font-size: 12px;
  padding: 7px 13px;
  line-height: 100%;
  display: block;
  text-align: center;
}
.card-feed .info .menu ul li a:hover {
  background: #f2f2f5;
}
.card-feed .txt a {
  color: #6097d6;
}
.card-feed .txt img.face {
  width: 18px;
  height: 18px;
  vertical-align: -4px;
  margin: 0 2px;
}
.card-feed .media {
  margin: 5px 0;
}
/* 寰崥鏁呬簨 */
.media-story {
  position: relative;
  width: 167px;
  height: 223px;
  overflow: hidden;
}
.media-story .pic {
  width: 167px;
  height: 223px;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.media-story .pic img {
  min-width: auto;
  height: auto;
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: perspective(1px) translate(-50%, -50%);
  /*注释cursor: url(../img/zoom_in.cur), auto;*/
}
.media-story .video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.media-story .video video {
  min-width: auto;
  height: auto;
  width: 100%;
  min-height: 100%;
  /*注释cursor: url(../img/zoom_in.cur), auto;*/
}
.media-story .video .story-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 53px;
  background: -webkit-linear-gradient(
    top,
    rgba(3, 0, 0, 0) 0%,
    rgba(3, 0, 0, 0.3) 100%
  );
  background: linear-gradient(
    to top bottom,
    rgba(3, 0, 0, 0) 0%,
    rgba(3, 0, 0, 0.3) 100%
  );
}
.media-story .icon-story {
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -28px;
}
.media-story .story-name {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 90%;
  height: 14px;
  padding: 0 5%;
  text-align: center;
  line-height: 14px;
  color: #fff;
  filter: alpha(opacity=85);
  opacity: 0.85;
  font-size: 12px;
}
/* 澶у浘 */
.media-bigpic-a .thumbnail {
  width: 500px;
  height: auto;
  position: relative;
}
.media-bigpic-a .thumbnail img {
  width: 500px;
  height: auto;
}
/* 瑙嗛 */
.media-video-a .thumbnail {
  width: 500px;
  height: 281px;
  position: relative;
}
.media-video-a .thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.media-video-a .thumbnail .icon-media {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -27px 0 0 -27px;
  cursor: pointer;
}
.media-video-a .video-val {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 12px;
  color: #fff;
}
.media-video-a .live-val {
  position: absolute;
  top: 10px;
  left: 10px;
  color: #fff;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.4);
  padding-right: 12px;
  border-radius: 35px;
}
.media-video-a .playback {
  display: inline-block;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-radius: 50%;
  background: #df795b;
}
/* 鏂囩珷 */
.media-article-a .thumbnail {
  width: 500px;
  height: 200px;
  position: relative;
}
.media-article-a .thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.media-article-a .thumbnail .icon-doubt,
.media-article-a .thumbnail .icon-flash {
  position: absolute;
  top: 10px;
  right: 10px;
}
.media-article-a .thumbnail .icon-charity,
.media-article-a .thumbnail .icon-vplus,
.media-article-a .thumbnail .icon-reward {
  position: absolute;
  top: 0;
  right: 0;
}
.media-article-a .thumbnail span {
  color: #fff;
  position: absolute;
  bottom: 6px;
  left: 16px;
}
/* 淇℃伅 */
.media-info {
  width: 472px;
  padding: 14px;
  cursor: pointer;
  background: #f2f2f5;
  overflow: hidden;
}
.media-info h4 {
  font-size: 22px;
  line-height: 30px;
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.media-info p {
  color: #808080;
  max-height: 44px;
  overflow: hidden;
  line-height: 150%;
  margin: 5px 0;
  font-size: 14px;
}
.media-info p em {
  color: #fa7d3c;
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
/* 鍙戝竷 */
.card-sender {
  overflow: hidden;
}
.card-sender .tab {
  border-bottom: 1px solid #e8e8e8;
}
.card-sender .tab span {
  margin-left: 15px;
}
.card-sender .tab ul {
  display: inline-block;
  margin-bottom: -1px;
}
.card-sender .tab li {
  color: #eb7350;
  height: 26px;
  line-height: 26px;
  padding: 0 10px;
  display: inline-block;
  cursor: pointer;
}
.card-sender .tab li.selected {
  color: #666;
  border: 1px solid #e8e8e8;
  border-bottom: 0;
  background: #fff;
}
.card-sender .content {
  width: 438px;
  margin: 10px 0 5px 0;
  padding: 6px 10px;
  line-height: 18px;
  word-wrap: break-word;
  overflow: hidden;
  background: #f3f3f3;
}
.card-sender .content a {
  color: #eb7350;
}
.card-sender .content p .face {
  width: 18px;
  height: 18px;
  vertical-align: -4px;
  margin: 0 2px;
}
.card-sender .top {
  overflow: hidden;
}
.card-sender .grade {
  height: 20px;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  margin-top: 8px;
}
.card-sender .grade .starbar {
  position: relative;
  display: inline-block;
  width: 83px;
  height: 14px;
  /*注释background: url(../img/icon_v6.png) no-repeat -525px -75px;*/
}
.card-sender .grade .starbar-stars {
  display: block;
  height: 14px;
  /*注释background: url(../img/icon_v6.png) no-repeat -525px -100px;*/
}
.card-sender .grade span {
  color: #808080;
  font-weight: normal;
  margin-left: 5px;
}
.card-sender .num {
  text-align: right;
  color: #808080;
}
.card-sender .num strong {
  font-weight: 700;
  font-size: 22px;
  font-style: italic;
  font-family: Constantia, Georgia;
}
.card-sender .num strong.warn {
  color: #f90;
}
.card-sender .func {
  overflow: hidden;
}
.card-sender .func .avator {
  float: left;
  margin-top: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.card-sender .func .avator img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.card-sender .func .input-wrap {
  position: relative;
  float: left;
  margin-left: 20px;
  width: 584px;
}
.card-sender .func .input-wrap .input {
  position: relative;
  margin: 5px 0;
}
.card-sender .func .input-wrap .input:before {
  content: "";
  position: absolute;
  top: 20px;
  left: -7px;
  width: 0;
  height: 0;
  border-right: 7px solid #ccc;
  border-bottom: 7px solid transparent;
  border-top: 7px solid transparent;
}
.card-sender .func .input-wrap .input:after {
  content: "";
  position: absolute;
  top: 20px;
  left: -6px;
  width: 0;
  height: 0;
  border-bottom: 7px solid transparent;
  border-right: 7px solid #fff;
  border-top: 7px solid transparent;
}
.card-sender .func .input-wrap .input textarea {
  width: 572px;
  font-size: 14px;
  word-wrap: break-word;
  line-height: 18px;
  overflow: hidden;
  color: #808080;
  padding: 5px;
  height: auto;
  min-height: 68px;
  border: 1px solid #e6e6e6;
}
.card-sender .func .input-wrap .input .succeed {
  width: 130px;
  height: 42px;
  line-height: 42px;
  font-size: 20px;
  color: #333;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -65px;
  margin-top: -21px;
}
.card-sender .func .input-wrap .input .succeed .icon-ok-l {
  margin-right: 10px;
  vertical-align: middle;
}
.card-sender .func .input-wrap .func {
  margin-top: 4px;
}
.card-sender .func .input-wrap .func .face {
  float: left;
  margin-top: 2px;
}
.card-sender .func .input-wrap .func .btn {
  float: right;
}
.card-sender .func .input-wrap .func .btn span {
  display: inline-block;
  vertical-align: middle;
}
.card-sender .func .input-wrap .func .btn label {
  margin-right: 10px;
  /*display: block;*/
}
.card-sender .func .input-wrap .func .btn input {
  margin-right: 5px;
  vertical-align: middle;
}
.card-sender .func .input-wrap-share {
  position: relative;
  float: none;
  margin-left: 0;
  width: 458px;
}
.card-sender .func .input-wrap-share .input textarea {
  width: 446px;
}
.card-sender .func .input-wrap .input textarea:focus {
  border: 1px solid #eb7350;
}
.card-sender .func .input-wrap-share .input:before,
.card-sender .func .input-wrap-share .input:after {
  display: none;
}
.card-sender .comment a {
  color: #eb7350;
}
.card-sender .comment .flex {
  padding: 10px 0;
}
.card-sender .comment .flex a .wbicon {
  font-size: 10px;
  padding: 0px 1px;
  border: 1px solid #eb7350;
  vertical-align: 1px;
  margin-left: 5px;
}
.card-sender .comment .flex a:hover .wbicon {
  background: #eb7350;
  color: #fff;
}
.card-sender .comment .item,
.card-sender .comment .more {
  border-top: 1px solid #d9d9d9;
  padding: 8px 0;
}
.card-sender .comment .avator {
  float: left;
  width: 30px;
}
.card-sender .comment .avator img {
  width: 30px;
}
.card-sender .comment .info {
  width: 418px;
  margin-left: 40px;
  line-height: 21px;
}
.card-sender .comment .info p {
  color: #808080;
}
.card-sender .comment .info p span {
  margin-left: 10px;
  display: none;
}
.card-sender .comment .item:hover .info p span {
  display: inline;
}
/* 绾㈠寘 */
.card-rp {
  position: relative;
  width: 300px;
  height: 81px;
  border: 0;
}
.card-rp .avator {
  width: 75px;
  height: 81px;
  /*注释background: url(../img/redpacket_bg1.png) no-repeat;*/
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.card-rp .avator div {
  width: 42px;
  height: 42px;
  padding: 10px 0 0 11px;
  position: relative;
}
.card-rp .avator div img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.card-rp .avator div .icon-vip {
  position: absolute;
  right: -2px;
  bottom: -2px;
}
.card-rp .info {
  width: 240px;
  height: 81px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}
.card-rp .info img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.card-rp .info p {
  position: absolute;
  right: 12px;
  text-align: right;
  width: 150px;
}
.card-rp .info p.text1 {
  top: 10px;
  color: #fed65a;
  font-size: 16px;
}
.card-rp .info p.text2,
.card-rp .info p.text3 {
  font-size: 12px;
  color: #fff;
}
.card-rp .info p.text2 {
  top: 30px;
}
.card-rp .info p.text3 {
  top: 50px;
  width: 60px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #fff;
  text-align: center;
  border-radius: 25px;
}
/* 娲诲姩 */
.card-activity .item {
  margin-bottom: 6px;
}
.card-activity .item:last-child {
  margin-bottom: 0;
}
.card-activity .item .pic {
  float: left;
  width: 92px;
  height: 92px;
  margin-right: 10px;
}
.card-activity .item .pic img {
  width: 92px;
  height: 92px;
}
.card-activity .item .info {
  height: 92px;
  background: #f2f2f5;
}
.card-activity .item .info h5 {
  font-size: 14px;
  font-weight: bold;
  padding: 5px 0 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.card-activity .item .info ul li {
  margin-top: 3px;
  color: #808080;
}
.card-activity .item .info .s-btn-d {
  float: right;
  margin-top: 3px;
  margin-right: 5px;
}
/* 鍏泭椤圭洰 */
.card-public .pic {
  float: left;
  width: 92px;
  height: 145px;
  margin-right: 12px;
}
.card-public .pic img {
  width: 92px;
  height: 145px;
}
.card-public .info {
  background: #f2f2f5;
  height: 145px;
}
.card-public .info h5 {
  font-size: 14px;
  padding: 10px 0 5px 0;
}
.card-public .info p {
  height: 30px;
  overflow: hidden;
}
.card-public .info li {
  margin-top: 5px;
}
.card-public .info li em {
  color: #fa7d3c;
}
.card-public .info span {
  display: block;
  text-align: right;
  margin: 5px 10px 0 0;
}
/* 鐩稿叧鐢靛奖 */
.card-film .pic {
  float: left;
  width: 92px;
  height: 92px;
  margin-right: 10px;
}
.card-film img {
  width: 92px;
  height: 92px;
}
.card-film .info {
  height: 92px;
  background: #f2f2f5;
}
.card-film .info h5 {
  font-size: 14px;
  font-weight: bold;
  padding: 5px 0 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.card-film .info li {
  margin-top: 3px;
  color: #808080;
}
.card-film .info span {
  float: right;
  margin: 3px 5px 0 0;
}
/* 鏂囨湰 */
.card-para .card-content {
  text-align: center;
}
.card-para p {
  line-height: 160%;
  text-align: left;
}
.card-para img {
  max-width: 100%;
  margin-top: 10px;
}
/* 鍏充簬 */
.card-about dl {
  line-height: 32px;
  color: #808080;
  overflow: hidden;
}
.card-about dt,
.card-about dd {
  float: left;
}
.card-about dt {
  clear: left;
}
.card-about dd {
  width: 230px;
}
.card-about dd .tag {
  padding: 0 10px 0 5px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #d9d9d9;
  margin: 5px 0 5px 20px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.card-about dd .tag:before,
.card-about dd .tag:after {
  content: "";
  position: absolute;
  top: -1px;
  width: 0;
  height: 0;
}
.card-about dd .tag:before {
  left: -12px;
  border-right: 11px solid #d9d9d9;
  border-bottom: 11px solid transparent;
  border-top: 11px solid transparent;
}
.card-about dd .tag:after {
  left: -10px;
  border-bottom: 11px solid transparent;
  border-right: 11px solid #fff;
  border-top: 11px solid transparent;
}
/* 鍏充簬 */
.card-qr .pic {
  float: left;
  width: 92px;
  height: 92px;
}
.card-qr p {
  background: #f2f2f5;
  padding: 8px;
  height: 80px;
  margin-left: 92px;
  position: relative;
  line-height: 180%;
}
.card-qr p a {
  position: absolute;
  right: 8px;
  bottom: 4px;
}
/* 璇濋椤荤煡 */
.card-notice p,
.card-notice ul {
  line-height: 20px;
  word-wrap: break-word;
}
.card-notice ul {
  margin-top: 6px;
}
.card-notice li a {
  color: #6097d6;
}
/* 姝ｅ湪鐑悳 */
.card-hoting .card-content {
  height: 20px;
  overflow: hidden;
  margin: 16px;
}
.card-hoting ul {
}
.card-hoting li {
  font-size: 14px;
  line-height: 20px;
}
.card-hoting .icon-search {
  margin-right: 4px;
  vertical-align: -4px;
}
/* 鐑悳姒� */
.card-hotrank li {
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 20px;
}
.card-hotrank li .num {
  display: block;
  float: left;
  width: 12px;
  text-align: center;
  margin-top: 1px;
}
.card-hotrank li .icon-top {
  margin-top: 4px;
}
.card-hotrank li .num.top {
  color: #f60;
}
.card-hotrank li p {
  margin-left: 24px;
}
.card-hotrank li p .icon-txt {
  font-size: 12px;
  vertical-align: middle;
  margin-left: 2px;
}
.card-hotrank li p .icon-txt-topic,
.card-hotrank li p .icon-txt-topic-ad {
  vertical-align: 1px;
  font-size: 14px;
}
.card-hotrank li p .val {
  margin-left: 3px;
  float: right;
  color: #808080;
}
.card-hotrank li a {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  max-width: 173px;
  vertical-align: middle;
}
.card-hotrank li a .face {
  width: 18px;
  height: 18px;
  vertical-align: -4px;
  margin: 0 2px;
}
/* 鐩稿叧鍏磋叮涓婚〉 */
.card-interest .item {
  overflow: hidden;
  margin-bottom: 10px;
  color: #808080;
}
.card-interest .item .pic {
  position: relative;
  display: block;
  width: 55px;
  height: 55px;
  float: left;
}
.card-interest .item .pic img {
  width: 55px;
  height: 55px;
}
.card-interest .item .pic .icon-play-a {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -15px;
  margin-left: -15px;
  cursor: pointer;
}
.card-interest .item .info {
  margin-left: 65px;
}
.card-interest .item .info h2 {
  margin-bottom: 5px;
  font-size: 14px;
}
.card-interest .item .info p,
.card-interest .item .info dl {
  line-height: 22px;
  margin-bottom: 4px;
}
.card-interest .item .info dt {
  float: left;
}
.card-interest .item .info p,
.card-interest .item .info dd {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card-interest .item.item-stock dd span {
  margin-right: 10px;
  font-weight: bolder;
}
/* 鎼滅储鍘嗗彶 */
.card-history p,
.card-history li {
  height: 26px;
  overflow: hidden;
  line-height: 26px;
  padding: 0 9px 0 13px;
}
.card-history li:hover {
  background: #f2f2f5;
  border-radius: 2px;
}
.card-history .txt {
  width: 244px;
  overflow: hidden;
  float: left;
}
.card-history .del {
  display: none;
  float: right;
}
.card-history li:hover .del {
  display: block;
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
/* 图标 */
.icon-warn {
  display: inline-block;
  /*注释background-image: url(../img/icon_warn.png);*/
}
.icon-ques-s {
  width: 16px;
  height: 16px;
  background-position: 0 -150px;
}
.icon-ques-m {
  width: 24px;
  height: 30px;
  background-position: -50px -150px;
}
.icon-ok-s {
  width: 16px;
  height: 16px;
  background-position: 0 0;
}
.icon-ok-m {
  width: 23px;
  height: 26px;
  background-position: -200px -3px;
}
.icon-ok-l {
  width: 37px;
  height: 42px;
  background-position: -250px -4px;
}
.icon-warn-s {
  width: 16px;
  height: 16px;
  background-position: 1px -100px;
}
.icon-del-s {
  width: 16px;
  height: 16px;
  background-position: 0 -50px;
}
.icon-hint-s {
  width: 19px;
  height: 18px;
  background-position: 1px -199px;
}
.icon-hint-l {
  width: 44px;
  height: 50px;
  background-position: -93px -199px;
}
.icon-clock {
  display: inline-block;
  width: 15px;
  height: 15px;
  /*注释background: url(../img/icon_clock.png);*/
}
.icon-top {
  display: inline-block;
  width: 12px;
  height: 13px;
  /*注释background: url(../img/icon_top.png);*/
}
.icon-face {
  font-size: 20px;
  color: #ffa405;
}
.icon-diamond {
  display: inline-block;
  width: 20px;
  height: 15px;
  /*注释background: url(../img/icon_diamond.png) no-repeat;*/
}
.icon-hotpost {
  display: inline-block;
  width: 30px;
  height: 18px;
  /*注释background: url(../img/icon_hotpost.png) no-repeat left center;*/
}
.icon-hit-rank {
  display: inline-block;
  width: 32px;
  height: 52px;
  /*注释background: url(../img/icon_hit_rank.png);*/
}
.icon-hit-rank-pay {
  display: inline-block;
  width: 38px;
  height: 52px;
  /*注释background: url(../img/icon_hit_rank_pay.png);*/
}
.icon-doubt {
  display: inline-block;
  width: 40px;
  height: 40px;
  /*注释background: url(../img/icon_doubt.png);*/
}
.icon-flash {
  display: block;
  width: 40px;
  height: 40px;
  /*注释background: url(../img/icon_flash.png);*/
}
.icon-charity {
  display: block;
  width: 32px;
  height: 32px;
  /*注释background-image: url(../img/icon_v6_2.png);*/
  background-position: -375px -275px;
}
.icon-vplus {
  display: block;
  width: 32px;
  height: 32px;
  /*注释background-image: url(../img/icon_v6_2.png);*/
  background-position: -200px -200px;
}
.icon-reward {
  display: block;
  width: 32px;
  height: 32px;
  /*注释background-image: url(../img/icon_v6_2.png);*/
  background-position: -200px -235px;
}
.icon-hotrank {
  display: inline-block;
  width: 16px;
  height: 16px;
  text-indent: -9999px;
}
.icon-hot {
  /*注释background: url(../img/icon_hot.png);*/
  background-size: 16px 16px;
}
.icon-friend {
  /*注释background: url(../img/icon_friend.png);*/
  background-size: 16px 16px;
}
.icon-boom {
  /*注释background: url(../img/icon_boom.png);*/
  background-size: 16px 16px;
}
.icon-new {
  /*注释background: url(../img/icon_new.png);*/
  background-size: 16px 16px;
}
.icon-recom {
  /*注释background: url(../img/icon_recom.png);*/
  background-size: 16px 16px;
}
.icon-txt {
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  color: #fff;
  border-radius: 2px;
  text-align: center;
}
.icon-txt-new {
  background: #ff3852;
}
.icon-txt-hot {
  background: #ff9406;
}
.icon-txt-recommend {
  background: #00b7ee;
}
.icon-txt-friend {
  background: #8fc21e;
}
.icon-txt-boom {
  background: #bd0000;
}
.icon-txt-topic {
  background: #ff6f49;
}
.icon-txt-topic-ad {
  background: #4dadff;
}
.icon-txt-boil {
  background: #f86400;
}
.icon-ad {
  display: inline-block;
  width: 36px;
  height: 19px;
  /*注释background: url(../img/icon_ad.png) no-repeat;*/
  background-size: 100% 100%;
}
.icon-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: #f26d5f;
  border-radius: 50%;
  vertical-align: middle;
}
.icon-vip,
.icon-sex,
.icon-act,
.icon-story {
  display: inline-block;
  vertical-align: -1px;
  /*注释background: url(../img/icon_v6.png) no-repeat 0;*/
}
.icon-vip-y {
  width: 14px;
  height: 14px;
  background-position: 0 -50px;
}
.icon-vip-y-c {
  width: 20px;
  height: 20px;
  background-position: -50px -25px;
}
.icon-vip-b {
  width: 14px;
  height: 14px;
  background-position: 0 -75px;
}
.icon-vip-b-c {
  width: 20px;
  height: 20px;
  background-position: -50px -50px;
}
.icon-vip-g {
  width: 15px;
  height: 14px;
  background-position: 0 -300px;
}
.icon-daren {
  width: 13px;
  height: 14px;
  background-position: 0 -125px;
}
.icon-vip-daren {
  width: 20px;
  height: 20px;
  background-position: -50px 0;
}
.icon-vip-lady {
  width: 20px;
  height: 20px;
  background-position: -50px -100px;
}
.icon-member {
  width: 14px;
  height: 14px;
  background-position: 0 -175px;
}
.icon-sex-female {
  width: 12px;
  height: 14px;
  background-position: 0 -25px;
}
.icon-sex-male {
  width: 12px;
  height: 14px;
  background-position: 0 0;
}
.icon-act-praise {
  width: 12px;
  height: 13px;
  background-position: -100px -25px;
}
.icon-act-praised {
  width: 12px;
  height: 13px;
  background-position: -125px -25px;
}
.icon-story {
  width: 56px;
  height: 16px;
  background-position: -525px -300px;
}
.icon-search {
  display: inline-block;
  width: 17px;
  height: 18px;
  /*注释background: url(../img/icon_search.png) no-repeat;*/
}
.icon-interest {
  display: inline-block;
  width: 17px;
  height: 17px;
  background-repeat: no-repeat;
  /*注释background-image: url(../img/icon_interest2.png);*/
  margin-right: 5px;
  vertical-align: middle;
}
.icon-topic {
  background-position: 0 0;
}
.icon-film {
  background-position: -22px 0;
}
.icon-music {
  background-position: -44px 0;
}
.icon-app {
  background-position: 0 -22px;
}
.icon-location {
  background-position: -23px -22px;
}
.icon-book {
  background-position: -45px -22px;
}
.icon-car {
  background-position: 0 -44px;
}
.icon-stock {
  background-position: -23px -44px;
}
.icon-topic-super {
  background-position: -44px -43px;
}
.icon-topic-super2 {
  background-position: -67px 0;
}
.icon-interest-title {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-repeat: no-repeat;
  /*注释background-image: url(../img/icon_interest_title.png);*/
  vertical-align: middle;
  margin-right: 5px;
}
.icon-brand {
  background-position: -76px -23px;
}
.icon-recommend {
  background-position: 0 -51px;
}
.icon-movie {
  background-position: -25px 0;
}
.icon-topics {
  background-position: 0 0;
}
.icon-musics {
  background-position: -50px 0;
}
.icon-apps {
  background-position: 0 -24px;
}
.icon-place {
  background-position: -78px 0;
}
.icon-books {
  background-position: -50px -24px;
}
.icon-media {
  display: inline-block;
  /*注释background: url(../img/icon_v6.png);*/
}
.icon-play-a {
  width: 30px;
  height: 30px;
  background-position: -200px 0;
}
.icon-play-a:hover {
  background-position: -250px 0;
}
.icon-play-b {
  width: 54px;
  height: 54px;
  background-position: -200px -265px;
}
.icon-play-b:hover {
  background-position: -275px -265px;
}
.icon-live {
  width: 62px;
  height: 62px;
  /*注释background: url(../img/icon_live.png);*/
}
.icon-btn {
  display: inline-block;
  /*注释background-image: url(../img/icon_btn1.png);*/
  background-repeat: no-repeat;
  height: 14px;
}
.icon-cart {
  width: 18px;
  background-position: -20px -22px;
}
.icon-praise {
  width: 15px;
  background-position: 0 0;
}
.icon-praised {
  width: 15px;
  background-position: 0 -20px;
}
.icon-dl {
  width: 10px;
  background-position: -20px 0;
}
.icon-title {
  display: inline-block;
  /*注释background: url(../img/icon_tit_v6.png);*/
  margin-right: 5px;
  vertical-align: -4px;
}
.icon-article {
  width: 17px;
  height: 15px;
  background-position: 0 -129px;
}
.icon-star {
  width: 17px;
  height: 17px;
  background-position: 0 -50px;
}
.icon-evaluation {
  width: 16px;
  height: 15px;
  background-position: 0 -255px;
}
.icon-attention {
  width: 14px;
  height: 16px;
  background-position: 0 -24px;
}
.icon-qipao {
  width: 14px;
  height: 14px;
  /*注释background: url(../img/icon_qipao.png);*/
}
.icon-topic-about {
  display: inline-block;
  width: 35px;
  height: 42px;
  /*注释background-image: url(../img/icon_topic_about.png);*/
  vertical-align: -20px;
  margin-right: 10px;
}
.icon-topic-about1 {
  background-color: #cd0b14;
}
.icon-topic-about2 {
  background-color: #f15f30;
}
.icon-topic-about3 {
  background-color: #d10054;
}
.icon-topic-about4 {
  background-color: #ec1a82;
}
.icon-topic-about5 {
  background-color: #ed269b;
}
.icon-topic-about6 {
  background-color: #1f1cba;
}
.icon-topic-about7 {
  background-color: #3833e6;
}
.icon-topic-about8 {
  background-color: #514df2;
}
.icon-topic-about9 {
  background-color: #ff9000;
}
.icon-topic-about10 {
  background-color: #ffae00;
}
.icon-topic-about11 {
  background-color: #ffc600;
}
.icon-topic-about12 {
  background-color: #1b7a26;
}
.icon-topic-about13 {
  background-color: #149223;
}
.icon-topic-about14 {
  background-color: #3fbb33;
}
.icon-topic-about15 {
  background-color: #8b7a04;
}
.icon-topic-about16 {
  background-color: #b09b06;
}
.icon-topic-about17 {
  background-color: #d1b910;
}
.icon-jinli {
  display: inline-block;
  width: 16px;
  height: 16px;
  /*注释background: url(../img/icon_v6_3.png) no-repeat -600px -175px;*/
  vertical-align: middle;
  margin-right: 4px;
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
