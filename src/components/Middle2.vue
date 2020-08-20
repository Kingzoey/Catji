<template>
  <div class="new-part">
    <div class="card">
      <header class="new-header">
        <br />
        <div class="icon"></div>
        <span class="new-name">
          <font-awesome-icon :icon="['fas', 'newspaper']" />&nbsp;最新
        </span>
      </header>
      <div class="new-list-top">
        <div class="top-left">
          <div class="big-item">
            <a class="cover" href="#" target="_blank">
              <img :src="test1" height="208" width="370" alt="最新视频1" />
            </a>
            <br />
            <a title="最新视频1">最新视频1</a>
          </div>
        </div>
        <div class="top-right">
          <div class="top-right-line1">
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="最新视频2" />
              </a>
              <br />
              <a title="最新视频2">最新视频2</a>
            </div>
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="最新视频3" />
              </a>
              <br />
              <a title="最新视频3">最新视频3</a>
            </div>
          </div>
          <div class="top-right-line2">
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="最新视频5" />
              </a>
              <br />
              <a title="最新视频5">最新视频5</a>
            </div>
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="最新视频6" />
              </a>
              <br />
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
              <br />
              <a title="最新视频8">最新视频8</a>
            </div>
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="最新视频9" />
              </a>
              <br />
              <a title="最新视频9">最新视频9</a>
            </div>
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="最新视频10" />
              </a>
              <br />
              <a title="最新视频10">最新视频10</a>
            </div>
            <div class="normal-item">
              <a class="cover" href="#" target="_blank">
                <img :src="test1" height="90" width="175" alt="最新视频11" />
              </a>
              <br />
              <a title="最新视频11">最新视频11</a>
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
.new-part {
  position: inherit;
}
.new-list-top:after {
  content: "";
  display: block;
  clear: both;
}
.new-list-top {
  white-space: nowrap;
}
.new-name {
  font-size: 30px;
}
.new-header {
  margin-left: 10px;
}
.top-left {
  display: inline-block;
  margin: -31px;
}
.bottom {
  float: left;
}
.normal-item {
  float: left;
  width: 12em;
  border: 200px;
  margin-left: 50px;
}
.top-right {
  display: inline-block;
  margin-right: 10px;
}
</style>