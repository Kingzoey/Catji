
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
      <ul>
        <li>
          <a
            class="cur"
            href="/weibo?q=%23NBA%E6%AF%94%E8%B5%9B%E6%97%A5%23&Refer=weibo_weibo"
            title="综合"
          >综合</a>
        </li>
        <li>
          <a
            href="/realtime?q=%23NBA%E6%AF%94%E8%B5%9B%E6%97%A5%23&rd=realtime&tw=realtime&Refer=weibo_realtime"
            title="实时"
          >实时</a>
        </li>
        <li>
          <a
            href="/hot?q=%23NBA%E6%AF%94%E8%B5%9B%E6%97%A5%23&xsort=hot&suball=1&tw=hotweibo&Refer=weibo_hot"
            title="热门"
          >热门</a>
        </li>
        <li>
          <a
            href="/video?q=%23NBA%E6%AF%94%E8%B5%9B%E6%97%A5%23&xsort=hot&hasvideo=1&tw=video&Refer=weibo_video"
            title="视频"
          >视频</a>
        </li>
        <li>
          <a href="/pic?q=%23NBA%E6%AF%94%E8%B5%9B%E6%97%A5%23&Refer=weibo_pic" title="图片">图片</a>
        </li>
      </ul>
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
/* 绾㈠寘 */
.media-redpacket {
  position: relative;
  width: 366px;
  height: 100px;
  overflow: hidden;
  cursor: pointer;
}
.media-redpacket .avator {
  position: absolute;
  width: 86px;
  height: 100px;
  z-index: 1;
  /*注释background: url(../img/redpacket_bg2.png) no-repeat;*/
}
.media-redpacket .avator span {
  display: block;
  position: relative;
  width: 52px;
  height: 52px;
  margin: 14px 0 0 13px;
  padding: 2px;
  background: #f3b550;
  background: rgba(243, 181, 80, 1);
  border-radius: 50%;
}
.media-redpacket .avator span img {
  width: 52px;
  height: 52px;
}
.media-redpacket .icon-vip {
  position: absolute;
  right: 2px;
  bottom: 2px;
}
.media-redpacket .text {
  position: absolute;
  width: 298px;
  height: 100px;
  top: 0px;
  left: 68px;
  text-align: right;
  background: #dc272c;
  margin: 0;
}
.media-redpacket .text p,
.media-redpacket .text a {
  position: absolute;
  right: 14px;
  width: 200px;
  color: #fff;
}
.media-redpacket .text .text-1 {
  top: 12px;
  color: #fed65a;
}
.media-redpacket .text .text-2 {
  top: 37px;
}
.media-redpacket .text .text-3 {
  display: block;
  top: 64px;
  width: 72px;
  height: 22px;
  line-height: 22px;
  border: 1px solid #fff;
  text-align: center;
  border-radius: 25px;
}
.media-redpacket .text .text-4 {
  top: 28px;
}
.media-redpacket .text .text-5 {
  top: 50px;
  color: #fed65a;
}
.media-redpacket .text p span.num {
  font-size: 28px;
}
/* item */
.media-item-a {
  width: 500px;
  background: #f2f2f5;
  overflow: hidden;
}
.media-item-a .pic {
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.media-item-a .pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.media-item-a .pic .icon-media {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
  margin-top: -25px;
}
.media-item-a .info {
  padding: 5px 10px;
  display: inline-block;
  vertical-align: middle;
  width: 376px;
}
.media-item-a .info h4 {
  font-size: 14px;
}
.media-item-a .info p {
  color: #808080;
  height: 40px;
  overflow: hidden;
  line-height: 160%;
  font-size: 12px;
}
.media-item-a .info.stock h4 span {
  color: #808080;
  font-size: 12px;
  margin-left: 10px;
}
.media-item-a .info.stock p {
  height: auto;
}
.media-item-a .info.stock p span {
  margin-right: 10px;
}
.media-item-a .info.stock p .count {
  font-size: 18px;
  font-weight: bolder;
}
.media-item-a .info.stock .drop p {
  color: #4ab666;
}
.media-item-a .info.stock .rise p {
  color: #e05a5a;
}
.media-item-b {
  width: 320px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
}
.media-item-b .pic {
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.media-item-b .pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.media-item-b .pic .icon-media {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
  margin-top: -25px;
}
.media-item-b .info {
  padding: 5px;
  display: inline-block;
  vertical-align: middle;
  width: 200px;
  font-size: 12px;
}
.media-item-b .info p {
  color: #808080;
  height: 40px;
  overflow: hidden;
  line-height: 160%;
}
/* 鍥剧墖 */
.media-piclist ul {
  overflow: hidden;
}
.media-piclist ul li {
  position: relative;
  overflow: hidden;
}
.media-piclist ul li:hover {
  /*注释cursor: url(../img/zoom_in.cur), auto;*/
}
.media-piclist ul li .s-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -8px;
  margin-top: -8px;
}
.media-piclist ul li img {
  max-width: none;
  max-height: none;
}
.media-piclist ul.m1.w1 li {
  width: 223px;
  height: 167px;
  text-align: center;
}
.media-piclist ul.m1.h1 li {
  width: 167px;
  height: 223px;
  text-align: center;
}
.media-piclist ul.m1.w1.c1 li img {
  width: auto;
  min-width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: perspective(1px) translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: perspective(1px) translate(-50%, -50%);
}
.media-piclist ul.m1.h1.c1 li img {
  min-width: auto;
  height: auto;
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: perspective(1px) translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: perspective(1px) translate(-50%, -50%);
}
.media-piclist ul.m1.h1.t1 li img {
  min-width: auto;
  height: auto;
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.media-piclist ul.m1 li.pic-l {
  max-width: none;
  max-height: none;
  width: 440px;
  height: 221px;
}
.media-piclist ul li.pic-l:hover {
  cursor: auto;
}
.media-piclist ul.m2 {
  width: 342px;
}
.media-piclist ul.m3 {
  width: 342px;
}
.media-piclist ul.m4 {
  width: 228px;
}
.media-piclist ul.m2 li,
.media-piclist ul.m3 li,
.media-piclist ul.m4 li {
  width: 110px;
  height: 110px;
  margin: 0 4px 4px 0;
  float: left;
}
.media-piclist ul.m2 li img,
.media-piclist ul.m3 li img,
.media-piclist ul.m4 li img {
  width: 100%;
  height: 100%;
}
/* 鍥剧墖鏀惧ぇ */
.media-pic-zoom {
  background: #f2f2f5;
  padding: 10px;
  position: relative;
}
.media-pic-zoom .tab {
  overflow: hidden;
  font-size: 12px;
  display: inline-block;
}
.media-pic-zoom .tab li {
  float: left;
  margin-right: -1px;
}
.media-pic-zoom .tab li a {
  display: block;
  margin: 5px 0;
  padding: 0 10px;
  border-right: 1px solid #d9d9d9;
  line-height: 10px;
}
.media-pic-zoom .bigpic {
  text-align: center;
  position: relative;
}
.media-pic-zoom .bigpic img {
  display: inline-block;
  max-width: 100%;
  vertical-align: middle;
}
.media-pic-zoom .bigpic.zoom-out img {
  /*注释cursor: url(../img/zoom_out.cur), auto;*/
}
.media-pic-zoom .bigpic.prev {
  /*注释cursor: url(../img/pic_prev.cur), auto;*/
}
.media-pic-zoom .bigpic.next {
  /*注释cursor: url(../img/pic_next.cur), auto;*/
}
.media-pic-zoom .bigpic .s-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -8px;
  margin-top: -8px;
}
.media-pic-zoom .choose-pic {
  margin-top: 10px;
  overflow: hidden;
}
.media-pic-zoom .choose-pic li {
  position: relative;
  float: left;
  width: 58px;
  height: 58px;
  margin-right: 2px;
  padding: 2px;
  opacity: 0.5;
  cursor: pointer;
}
.media-pic-zoom .choose-pic li.cur,
.media-pic-zoom .choose-pic li:hover {
  padding: 0;
  border: 2px solid #fa7d3c;
  opacity: 1;
}
.media-pic-zoom .choose-pic li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.media-pic-zoom .more-pic {
  position: absolute;
  background: #fff;
  top: 130px;
  left: 185px;
  box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.2);
}
.media-pic-zoom .more-pic .top {
  padding: 6px 10px;
  text-align: center;
  font-size: 12px;
}
.media-pic-zoom .more-pic .top .close {
  position: absolute;
  right: 10px;
  top: 5px;
  color: #999;
  font-size: 14px;
  cursor: pointer;
}
.media-pic-zoom .more-pic .top p a {
  color: #eb7350;
}
.media-pic-zoom .more-pic ul {
  width: 180px;
  height: 50px;
  margin: 0 10px 10px;
  padding: 10px 10px 10px 0;
  border: 1px solid #d0d0d0;
  background: #ededed;
  overflow: hidden;
}
.media-pic-zoom .more-pic ul li {
  float: left;
  width: 50px;
  height: 50px;
  margin-left: 10px;
}
.media-pic-zoom .more-pic ul li img {
  width: 50px;
  height: 50px;
}

/* 浠樿垂寰崥 */
.media-pay .pic {
  width: 440px;
  height: 280px;
  overflow: hidden;
  position: relative;
}
.media-pay .pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.media-pay-hint {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  margin-top: -51px;
  margin-left: -125px;
  text-align: center;
}
.media-pay-hint p {
  display: block;
  margin-bottom: 16px;
  color: #fff;
  font-size: 16px;
  text-shadow: 1px 1px 2px #000;
}
.card-feed .from,
.card-feed .from a {
  font-size: 12px;
  color: #808080;
}
.card-feed .from a:hover {
  color: #eb7350;
}
/* card comment */
.card-comment {
  position: relative;
  font-size: 12px;
}
.card-comment .s-arrow-t {
  margin-left: 16px;
}
.card-comment .con {
  background: #f2f2f5;
  padding: 14px;
}
.card-comment .name {
  font-weight: bolder;
}
.card-comment .act {
  padding-top: 6px;
  overflow: hidden;
  margin-right: -1px;
}
.card-comment .act li {
  display: block;
  border-right: 1px solid #d9d9d9;
  line-height: 12px;
  margin: 0;
  padding: 0 10px;
  margin-right: -1px;
  float: left;
}
.card-comment .act li a {
  color: #808080;
}
.card-comment .act li a:hover {
  color: #eb7350;
}
.card-comment .act li a:hover .icon-act-praise {
  background-position: -125px -25px;
}
.card-comment .media-pic-zoom {
  padding: 0;
}
.card-comment .media-pic-zoom .choose-pic li {
  margin-right: 1px;
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
  border-color: #d9d9d9;
}
.card-act li a:hover .icon-act-praise {
  background-position: -125px -25px;
}
/* card together */
.card-together {
  border-top: 1px solid #eee;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  background: #f2f2f5;
}
.card-together .loading {
  text-align: center;
  line-height: 45px;
}
.card-together .header {
  height: 30px;
  margin: 8px 16px -8px;
}
.card-together .header div {
  height: 15px;
  border-bottom: 1px solid #d9d9d9;
}
.card-together .header span {
  height: 30px;
  line-height: 30px;
  background: #f2f2f5;
}
.card-together .card-sender .func .avator,
.card-together .card-sender .func .avator img {
  width: 30px;
  height: 30px;
  border-radius: 0;
}
.card-together .card-sender .func .input-wrap {
  margin-left: 10px;
  width: 556px;
}
.card-together .card-sender .func .input-wrap .input:before,
.card-together .card-sender .func .input-wrap .input:after {
  display: none;
}
.card-together .card-sender .func .input-wrap .input textarea {
  width: 544px;
  font-size: 12px;
  line-height: auto;
  padding: 5px;
  height: 20px;
  min-height: 20px;
}
.card-together .card-sender .func .input-wrap-review {
  width: 616px;
}
.card-together .card-sender .func .input-wrap-review .input textarea {
  width: 604px;
}
.card-together .card-more-a a {
  border-top: 1px solid #d9d9d9;
}
/* card review */
.card-review {
  margin-top: -1px;
  border-top: 1px solid #d9d9d9;
  overflow: hidden;
}
.card-review .avator {
  width: 30px;
  height: 30px;
  float: left;
}
.card-review .avator img {
  width: 30px;
  height: 30px;
}
.card-review .content {
  margin-left: 40px;
}
.card-review .content .txt {
  line-height: 180%;
}
.card-review .content .txt a {
  color: #6097d6;
}
.card-review .content .face {
  width: 18px;
  height: 18px;
  vertical-align: -4px;
  margin: 0 2px;
}
.card-review .content .fun {
  margin-top: 5px;
}
.card-review .content .fun .act {
  padding-top: 2px;
  overflow: hidden;
}
.card-review .content .fun .act li {
  display: block;
  border-right: 1px solid #d9d9d9;
  line-height: 12px;
  margin: 0;
  padding: 0 10px;
  margin-right: -1px;
  float: left;
}
.card-review .content .fun .act li.hover {
  visibility: hidden;
}
.card-review:hover .content .fun .act li.hover {
  visibility: visible;
}
.card-review .content .fun .act li a:hover .icon-act-praise {
  background-position: -125px -25px;
}
.card-review .content .fun .from,
.card-review .content .fun .from a {
  color: #808080;
}
.card-review .content .fun .from a:hover {
  color: #eb7350;
}
/* card user */
.card-user-a {
  overflow: hidden;
}
.card-user-a .avator {
  width: 50px;
  height: 50px;
  float: left;
  margin-right: 10px;
}
.card-user-a .avator img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.card-user-a .info {
  margin-left: 60px;
}
.card-user-a .info .name {
  font-size: 14px;
  font-weight: 700;
}
.card-user-a .info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  margin: 6px 0;
}
.card-user-b {
  overflow: hidden;
  color: #808080;
}
.card-user-b .avator {
  width: 86px;
  height: 86px;
  float: left;
  margin-right: 20px;
}
.card-user-b .avator img {
  width: 86px;
  height: 86px;
  border-radius: 50%;
}
.card-user-b .info {
  margin-left: 106px;
}
.card-user-b .info .name {
  font-size: 14px;
  font-weight: 700;
}
.card-user-b .info .s-btn-c {
  margin-left: 10px;
}
.card-user-b .info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  font-size: 12px;
  margin: 6px 0;
}
.card-user-b .info p i {
  vertical-align: text-top;
}
.card-user-b .info p a {
  color: #6097d6;
  margin-left: 5px;
}
.card-user-b .info p span {
  padding-right: 12px;
  margin-right: 12px;
  border-right: 1px solid #d9d9d9;
}
.card-user-b .info p span.s-nobr {
  border: 0;
}
.card-user-c {
  margin-bottom: 14px;
}
.card-user-c .avator,
.card-user-c .info {
  display: inline-block;
  vertical-align: middle;
}
.card-user-c .avator {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.card-user-c .avator img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.card-user-c .info {
  width: 210px;
}
.card-user-c .info .name {
  font-size: 14px;
  font-weight: 700;
}
.card-user-c .info p {
  margin-top: 4px;
  color: #808080;
}
/* card user list */
.card-user-list-a {
  overflow: hidden;
}
.card-user-list-a li {
  margin: 15px 0 0 20px;
  float: left;
  width: 50px;
  text-align: center;
}
.card-user-list-a .avator {
  position: relative;
  display: block;
}
.card-user-list-a .avator img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.card-user-list-a .avator .icon-vip {
  position: absolute;
  right: 0;
  bottom: 0;
}
.card-user-list-a .name {
  display: block;
  margin: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 鐩磋揪 card */
.card-direct-a .pic-l {
  display: inline-block;
  vertical-align: middle;
  position: relative;
}
.card-direct-a .pic-l a {
  position: relative;
  display: block;
  cursor: pointer;
}
.card-direct-a .pic-l img {
  width: 86px;
  height: 86px;
}
.card-direct-a .pic-l .icon-media {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
  margin-top: -25px;
}
.card-direct-a .pic-xl img {
  width: 142px;
  height: 142px;
}
.card-direct-a .info {
  margin-left: 10px;
  color: #808080;
  display: inline-block;
  vertical-align: middle;
  width: 550px;
}
.card-direct-a .info.s-w437 {
  width: 437px;
}
.card-direct-a .info div {
  margin-bottom: 5px;
}
.card-direct-a .info div a.name {
  font-size: 14px;
  margin-right: 5px;
  font-weight: 700;
}
.card-direct-a .info div .icon-diamond {
  vertical-align: -2px;
  margin-left: 4px;
}
.card-direct-a .info p {
  line-height: 180%;
}
.card-direct-a .info p span em {
  font-weight: 700;
  margin-right: 20px;
}
.card-direct-a .opt {
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  width: 106px;
}
.card-direct-a .opt i {
  font-size: 20px;
  color: #999;
  margin-right: 5px;
  vertical-align: middle;
}
.card-direct-a .opt .icon-add {
  font-size: 14px;
}
.card-direct-a .opt .icon-praise,
.card-direct-a .opt .icon-praised {
  margin-right: 0;
}
.card-direct-a .opt .icon-hit-rank,
.card-direct-a .opt .icon-hit-rank-pay {
  float: right;
  margin-right: 20px;
}
.card-direct-b {
  overflow: hidden;
}
.card-direct-b .pic-xl {
  float: left;
  width: 142px;
  height: 142px;
  margin-right: 16px;
}
.card-direct-b .pic-xl img {
  width: 142px;
  height: 142px;
}
.card-direct-b .info {
  height: 110px;
  background: #f2f2f5;
  padding: 16px;
  line-height: 180%;
}
.card-direct-b .info h1 {
  font-size: 14px;
  margin-bottom: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card-direct-b .info p a {
  color: #eb7350;
}
.card-direct-c .pic-l {
  display: inline-block;
  vertical-align: middle;
  position: relative;
}
.card-direct-c .pic-l a {
  position: relative;
  display: block;
  cursor: pointer;
}
.card-direct-c .pic-l img {
  width: 100px;
  height: 100px;
}
.card-direct-c .info {
  margin-left: 10px;
  color: #808080;
  display: inline-block;
  vertical-align: middle;
  width: 460px;
}
.card-direct-c .info h1 {
  font-size: 16px;
  margin-bottom: 5px;
}
.card-direct-c .info p {
  line-height: 180%;
}
.card-direct-c .opt {
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
}
.card-direct-c .opt .act {
  color: #6097d6;
  font-size: 16px;
  text-align: center;
}
.card-direct-c .opt .act .i-act {
  display: block;
  font-size: 30px;
  color: #6097d6;
  font-weight: lighter;
}
.card-direct-c .opt img {
  display: block;
  width: 30px;
  margin: auto;
}
/* 鍚嶇墖 */
.card-star-fiche {
  position: relative;
}
.card-star-fiche .bg {
  width: 100%;
  height: 345px;
}
.card-star-fiche .bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-star-fiche .bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 120px;
  color: #fff;
}
.card-star-fiche .outer {
  position: relative;
  width: 100%;
  height: 120px;
  background: #000;
  opacity: 0.4;
  filter: alpha(opacity=40);
}
.card-star-fiche .user {
  position: absolute;
  left: 0;
  top: 0px;
  width: 660px;
  padding: 10px 15px 15px;
}
.card-star-fiche .user .avator {
  width: 86px;
  height: 86px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin-top: -50px;
}
.card-star-fiche .user .avator img {
  width: 86px;
  height: 86px;
  border-radius: 50%;
}
.card-star-fiche .user .detail {
  margin-left: 10px;
  width: 560px;
  display: inline-block;
  vertical-align: middle;
}
.card-star-fiche .user .detail p {
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card-star-fiche .user .detail a.name {
  color: #fff;
  font-size: 14px;
}
.card-star-fiche .user .detail a.s-btn-c {
  margin-left: 10px;
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
/* 瓒呯骇璇濋鍒楄〃 */
.card-super-topic-list li {
  border-top: 1px solid #ebebeb;
  padding: 10px 20px;
}
.card-super-topic-list li .icon-hotpost {
  display: inline;
  margin-right: 10px;
  float: left;
}
.card-super-topic-list li a {
  display: block;
  line-height: 160%;
  margin-left: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 瑙嗛 */
.card-video-a .thumbnail {
  position: relative;
  height: 388px;
}
.card-video-a .thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-video-a .thumbnail .icon-media {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -27px 0 0 -27px;
  cursor: pointer;
}
/* 浜岄摼 鍥涢摼 */
.card-link ul {
  padding: 10px 0;
}
.card-link ul li {
  border-right: 1px solid #f2f2f5;
  text-align: center;
  display: inline-block;
  font-size: 14px;
}
.card-link ul.link-two li {
  width: 341px;
}
.card-link ul.link-four li {
  width: 24.5%;
}
.card-link ul.link-two li img {
  width: 68px;
  height: 68px;
  vertical-align: middle;
  margin-right: 10px;
}
.card-link ul.link-two.s-vertical li img {
  display: block;
  margin: 0 auto 5px;
}
.card-link ul.link-four li img {
  width: 55px;
  height: 55px;
  display: block;
  margin: 0 auto 5px;
}
.card-link ul li.noborder {
  border: none;
}
/* 瑙嗙獥 澶氬浘 */
.card-win {
  overflow: hidden;
  padding: 14px;
  position: relative;
}
.card-win ul.win-hor {
  overflow-x: hidden;
  white-space: nowrap;
  margin: auto;
  height: 168px;
  position: relative;
}
.card-win .i-prev,
.card-win .i-next {
  top: 74px;
  z-index: 99;
  cursor: pointer;
  font-size: 40px;
  position: absolute;
  color: #666;
}
.card-win .i-prev:hover,
.card-win .i-next:hover {
  color: #eb7350;
}
.card-win .i-next {
  right: 10px;
}
.card-win .i-prev {
  left: 10px;
}
.card-win ul li {
  float: left;
  text-align: center;
  margin-right: 10px;
}
.card-win ul li:last-child {
  margin-right: 0;
}
.card-win ul.win-three li {
  width: 213px;
}
.card-win ul.win-four li {
  width: 157px;
}
.card-win ul.win-five li {
  width: 124px;
}
.card-win ul.win-six li {
  width: 101px;
}
.card-win ul.win-hor li {
  /*width: 200px;*/
  width: 300px;
  display: inline-block;
  float: none;
  /*position: relative;*/
  position: absolute;
}
.card-win ul li span {
  display: block;
  position: relative;
}
.card-win ul.win-three li span {
  width: 213px;
  height: 213px;
}
.card-win ul.win-four li span {
  width: 157px;
  height: 157px;
}
.card-win ul.win-five li span {
  width: 124px;
  height: 124px;
}
.card-win ul.win-six li span {
  width: 101px;
  height: 101px;
}
.card-win ul.win-hor li span {
  width: 300px;
  height: 168px;
  position: relative;
  top: 0;
}
.card-win ul li img {
  border-radius: 6px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
}
.card-win ul li .icon-play-a,
.card-win ul li .icon-play-b {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -15px 0 0 -15px;
  cursor: pointer;
}
.card-win ul li .icon-play-a {
  margin: -15px 0 0 -15px;
}
.card-win ul li .icon-play-b {
  margin: -28px 0 0 -28px;
}
.card-win ul li h4,
.card-win ul li p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card-win ul li h4 {
  font-size: 14px;
  line-height: 160%;
}
.card-win ul.win-hor li h4 {
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: left;
  width: 190px;
  padding: 5px;
  color: #fff;
  text-shadow: 0 0 2px #666;
}
.card-win ul li p {
  color: #808080;
}
/* 澶у浘 */
.card-pic-a {
  position: relative;
}
.card-pic-a.s-h186 {
  height: 186px;
}
.card-pic-a.s-h276 {
  height: 276px;
}
.card-pic-a img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: bottom;
}
/* 鏂囩珷 */
.card-article-a {
}
.card-article-a h3 {
  line-height: 18px;
  margin-bottom: 6px;
  font-size: 14px;
}
.card-article-a .content {
  overflow: hidden;
  color: #808080;
}
.card-article-a .pic {
  float: left;
  margin: 4px 18px 0 0;
  width: 88px;
  height: 68px;
  overflow: hidden;
}
.card-article-a .pic img {
  width: 88px;
  overflow: hidden;
}
.card-article-a .detail .txt {
  line-height: 24px;
  margin-bottom: 5px;
}
.card-article-a .detail .act span {
  margin-right: 8px;
}
.card-article-a .detail .act span a {
  color: #6097d6;
}
.card-article-a .detail .act span .icon-vip {
  margin-left: 3px;
  vertical-align: text-bottom;
}
.card-article-a .detail .act ul {
  overflow: hidden;
}
.card-article-a .detail .act li {
  float: left;
  text-align: center;
  padding: 0 10px;
  height: 14px;
  line-height: 14px;
  margin-left: -1px;
  border-left: 1px solid #d9d9d9;
}
.card-article-a .detail .act li a {
  color: #808080;
}
.card-article-a .detail .act li a:hover {
  color: #eb7350;
}
.card-article-a .detail .act li a:hover .icon-act-praise {
  background-position: -125px -25px;
}
/* 鏃犵粨鏋滄彁绀� */
.card-no-result {
  line-height: 20px;
}
.card-no-result p {
  margin-bottom: 20px;
}
.card-no-result dt {
  font-weight: bold;
}
.card-no-result a {
  color: #eb7350;
}
/* 璇濋璁剧疆 */
.card-topic-set a {
  margin: 4px 16px;
  display: inline-block;
}
/* 璇濋涓绘寔浜� */
.card-topic-presenter .msg {
  font-size: 14px;
  margin-bottom: 10px;
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
</style>
