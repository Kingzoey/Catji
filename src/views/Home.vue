<template>
  <div class="home">
    <NavBar />
    <div class="container">
      <div class="bank clearfix">
        <div class="left">
          <Middle2>
            <template v-slot:header>
              <font-awesome-icon :icon="['fas', 'fire']" />&nbsp;热门视频
            </template>
          </Middle2>
        </div>
        <div class="right">
          <Top />
        </div>
      </div>
      <div class="bank clearfix">
        <div class="left">
          <Middle2>
            <template v-slot:header>
              <font-awesome-icon :icon="['fas', 'newspaper']" />&nbsp;最新视频
            </template>
          </Middle2>
        </div>
        <div class="right">
          <Top_0 />
        </div>
      </div>
      <div class="bank clearfix">
        <div class="left">
          <Middle2>
            <template v-slot:header>
              <font-awesome-icon :icon="['fas', 'hashtag']" />&nbsp;热门标签
            </template>
          </Middle2>
        </div>
        <div class="right">
          <Top_1 />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar_Home.vue";
import Top from "@/components/Top.vue";
import Top_0 from "@/components/Top_0.vue";
import Top_1 from "@/components/Top_1.vue";
import Middle2 from "@/components/Middle2.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    Top,
    Top_0,
    Top_1,
    Middle2,
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  background-color: rgb(232, 248, 255);
}

.container {
  width: 1200px;
  margin: 0 auto;
}
.bank {
  margin-top: 30px;
  display: flex;
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
</style>
