<template>
  <div class="home">
    <NavBar />
    <div class="container">
      <div class="bank clearfix">
        <div class="left">
          <Middle :getData="mid1">
            <template v-slot:header>
              <font-awesome-icon :icon="['fas', 'fire']" />&nbsp;热门视频
            </template>
          </Middle>
        </div>
        <div class="right">
          <TopCombine />
        </div>
      </div>
      <div class="bank clearfix">
        <div class="left">
          <Middle :getData="mid2">
            <template v-slot:header>
              <font-awesome-icon :icon="['fas', 'newspaper']" />&nbsp;最新视频
            </template>
          </Middle>
        </div>
        <div class="right">
          <TopNewVideo />
        </div>
      </div>
      <div class="bank clearfix">
        <div class="left">
          <div class="card">
            <header class="new-header">
              <span class="new-name">
                <font-awesome-icon :icon="['fas', 'hashtag']" />&nbsp;热门标签
              </span>
            </header>
            <div id="wordcloud"></div>
          </div>
        </div>
        <div class="right">
          <TopTag />
        </div>
      </div>
    </div>
    <br />
  </div>
</template>


<script>
import Js2WordCloud from "js2wordcloud";
import { hotVideo, newVideo, hotTag } from "../api";
import NavBar from "@/components/NavBar_Home.vue";
import TopCombine from "@/components/TopCombine.vue";
import TopNewVideo from "@/components/TopNewVideo.vue";
import TopTag from "@/components/TopTag.vue";
import Middle from "@/components/Middle.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    TopCombine,
    TopNewVideo,
    TopTag,
    Middle,
  },
  data() {
    return {
      mid1: hotVideo,
      mid2: newVideo,
    };
  },
  mounted() {
    hotTag().then((res) => {
      res = res.data;
      let items = res.data;
      let items2 = [];
      items.forEach((item) => {
        items2.push(item);
        items2.push(item);
      });
      let words = items2.map((item, index) => [
        item.name,
        (items2.length - index) * 6,
      ]);
      // console.log(words);
      this.wc = new Js2WordCloud(document.getElementById("wordcloud"));
      this.wc.setOption({
        tooltip: {
          show: false,
        },
        list: words,
        color: "random-dark",
      });
    });
  },
};
</script>
<style scoped>
.home {
  background-color: rgb(232, 248, 255);
}

.container {
  width: 1200px;
  margin: 0 auto;
}
.bank {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  height: 420px;
  overflow: hidden;
}
.left,
.right {
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
}
.left {
  width: 840px;
}
.right {
  margin-left: 15px;
}

.card {
  padding-left: 30px;
  padding-top: 10px;
}

.new-header {
  height: 36px;
}

.new-name {
  font-size: 22px;
  line-height: 36px;
}

#wordcloud {
  height: 360px;
  width: 100%;
}
</style>
