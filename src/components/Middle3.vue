<template>
  <div class="tag-part">
    <div class="card">
      <header class="tag-header">
        <br />
        <div class="icon"></div>
        <span class="tag-name">
          <font-awesome-icon :icon="['fas', 'hashtag']" />&nbsp;标 签
        </span>
      </header>
      <div class="tag-list-top">
        <div class="top-left">
          <div class="big-item">
            <a class="cover" href="#" target="_blank">
              <img :src="test1" height="208" width="370" alt="标签视频1" />
            </a>
            <br />
            <a title="标签视频1">标签视频1</a>
          </div>
        </div>
        <div class="top-right">
          <div class="top-right-line1">
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="标签视频2" />
              </a>
              <br />
              <a title="标签视频2">标签视频2</a>
            </div>
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="标签视频3" />
              </a>
              <br />
              <a title="标签视频3">标签视频3</a>
            </div>
          </div>
          <div class="top-right-line2">
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="标签视频5" />
              </a>
              <br />
              <a title="标签视频5">标签视频5</a>
            </div>
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="标签视频6" />
              </a>
              <br />
              <a title="标签视频6">标签视频6</a>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-line1">
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="标签视频8" />
              </a>
              <br />
              <a title="标签视频8">标签视频8</a>
            </div>
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="标签视频9" />
              </a>
              <br />
              <a title="标签视频9">标签视频9</a>
            </div>
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="标签视频10" />
              </a>
              <br />
              <a title="标签视频10">标签视频10</a>
            </div>
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="标签视频11" />
              </a>
              <br />
              <a title="标签视频11">标签视频11</a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  </div>
</template>



<script>
import test1 from "@/assets/test.png";
export default {
  name: "Middle",
  data() {
    return {
      test1: test1,
    };
  },
};
</script>

<style>
.card {
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
}
.tag-part {
  position: inherit;
}
.tag-list-top:after {
  content: "";
  display: block;
  clear: both;
}
.tag-list-top {
  white-space: nowrap;
}
.tag-name {
  font-size: 30px;
}
.tag-header {
  margin-left: 10px;
}
.top-left {
  display: inline-block;
  margin-left: 50px;
}
.bottom {
  float: left;
}
.normal-item {
  float: left;
  border: 200px;
  margin-left: 50px;
}
.top-right {
  display: inline-block;
  margin-right: 10px;
}
</style>