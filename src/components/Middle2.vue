<template>
  <div class="new-part">
    <div class="card">
      <header class="new-header">
        <div class="icon"></div>
        <span class="new-name">
          <slot name="header"></slot>
        </span>
      </header>
      <div class="new-list-top clearfix">
        <div class="top-left">
          <div class="big-item">
            <a class="cover" href="#" target="_blank">
              <img :src="test1" height="208" width="370" alt="最新视频1" />
            </a>
            <a title="最新视频1">最新视频1</a>
          </div>
        </div>
        <div class="top-right">
          <div class="top-right-line1 clearfix">
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="最新视频2" />
              </a>
              <a title="最新视频2">最新视频2</a>
            </div>
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="最新视频3" />
              </a>
              <a title="最新视频3">最新视频3</a>
            </div>
          </div>
          <div class="top-right-line2 clearfix">
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="最新视频5" />
              </a>
              <a title="最新视频5">最新视频5</a>
            </div>
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="最新视频6" />
              </a>
              <a title="最新视频6">最新视频6</a>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-line1">
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="最新视频8" />
              </a>
              <a title="最新视频8">最新视频8</a>
            </div>
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="最新视频9" />
              </a>
              <a title="最新视频9">最新视频9</a>
            </div>
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="最新视频10" />
              </a>
              <a title="最新视频10">最新视频10</a>
            </div>
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="最新视频11" />
              </a>
              <a title="最新视频11">最新视频11</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import test1 from "@/assets/test.png";
// import { hotTag } from "@/api";
// import { hotVideo } from "@/api";
// import { newVideo } from "@/api";
export default {
  name: "Middle",
  data() {
    return {
      test1: test1,
    };
  },
  methods: {
    
  },
};
</script>

<style>
.new-part{
  height: 100%;
}
.card img {
  border-radius: 5px;
  display: block;
}
.card {
  padding-left: 30px;
  padding-top: 10px;
}
.new-part {
  position: inherit;
}

.new-list-top {
  white-space: nowrap;
  margin-top: 10px;
}
.new-name {
  font-size: 22px;
  line-height: 36px;
}
.new-header {
  height: 36px;
}
.top-left {
  display: inline-block;
  vertical-align: top;
}
.bottom {
  float: left;
}
.normal-item {
  float: left;
  width: 195px;
  height: 118px;
}
.top-right {
  display: inline-block;
  vertical-align: top;
  margin-left: 20px;
}
</style>