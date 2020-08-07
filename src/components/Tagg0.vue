
<template>
  <div id="navigator" class="n">
    <div class="wrapper">
      <div class="n-inner clearfix">
        <div class="n-tab-links">
          <a
            href="/168598"
            class="n-btn n-index n-fans n-404 router-link-exact-active router-link-active active"
          >
            <span class="iconfont icon-ic_home"></span>
            <span class="n-text">主页</span>
          </a>
          <a href="/168598/dynamic" class="n-btn n-dynamic">
            <span class="iconfont icon-ic_following"></span>
            <span class="n-text">动态</span>
          </a>
          <a href="/168598/video" class="n-btn n-video n-audio n-article n-album">
            <span class="iconfont icon-ic_video"></span>
            <span class="n-text">投稿</span>
            <span class="n-num">677</span>
          </a>
          <!---->
          <a href="/168598/channel/index" class="n-btn n-channel">
            <span class="iconfont icon-ic_channel"></span>
            <span class="n-text">频道</span>
            <span class="n-num">1</span>
          </a>
          <!---->
          <a href="/168598/favlist" class="n-btn n-favlist">
            <span class="iconfont icon-ic_collect"></span>
            <span class="n-text">收藏</span>
            <span class="n-num">14</span>
          </a>
          <a href="/168598/bangumi" class="n-btn n-bangumi n-subs n-cinema">
            <span class="iconfont icon-ic_sub"></span>
            <span class="n-text">订阅</span>
          </a>
          <!---->
        </div>
        <div class="clearfix g-search search-container">
          <input type="text" placeholder="搜索视频" class="space_input" />
          <span class="icon search-btn"></span>
        </div>
        <div class="n-statistics">
          <a href="/168598/fans/follow" class="n-data n-gz" title="64">
            <p class="n-data-k">关注数</p>
            <p id="n-gz" class="n-data-v space-attention">64</p>
          </a>
          <a href="/168598/fans/fans" class="n-data n-fs" title="4,368,107">
            <p class="n-data-k">粉丝数</p>
            <p id="n-fs" class="n-data-v space-fans">436.8万</p>
          </a>
          <div title="视频、动态、专栏累计获赞17,379,259" class="n-data n-bf">
            <p class="n-data-k">获赞数</p>
            <p id="n-bf" class="n-data-v">1737.9万</p>
          </div>
          <div title="截止昨天，播放数总计为378,366,522" class="n-data n-bf">
            <p class="n-data-k">播放数</p>
            <p id="n-bf" class="n-data-v">3.8亿</p>
          </div>
          <div title="截止昨天，阅读数总计为0" class="n-data n-bf">
            <p class="n-data-k">阅读数</p>
            <p id="n-bf" class="n-data-v">0</p>
          </div>
        </div>
      </div>
      <div class="n-cursor" style="width: 50px; left: 20px;"></div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
color: #222;
line-height: 1.7em;
font-family: Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
font-weight: 400;
margin: 0;
padding: 0;
border: 0;
word-break: break-word;
display: inline-block;
font-size: 0;
vertical-align: middle;
</style>
