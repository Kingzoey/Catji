<template>
  <div class="cat">
    <NavBar />
    <CatMain style="background-color: rgb(232, 248, 255);" :cat_id="cat_id"></CatMain>
    <div class="m-main-nav">
      <div class="nav">
        <ul class="nav-switch">
          <li
            v-for="(item, index) in tabs"
            :key="item.name"
            class="nav-switch-item"
            :class="{on : on == index}"
            @click="on = index"
            @mouseenter="hover = index"
            @mouseleave="hover = on"
          >{{item.name}}</li>
          <li class="nav-switch-anchor" :style="{transform: 'translateX('+anthorx+'px)'}" />
        </ul>
      </div>
      <component :is="tabs[on].component" :cat_id="cat_id"></component>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CatMain from "@/components/CatMain.vue";
import SearchResultVideo from "@/components/SearchResultVideo.vue";
import BlogCard from "@/components/BlogCard.vue";
import CatIntroduction from "@/components/CatIntroduction.vue";
export default {
  created() {
    console.log(this.$route.params);
    this.cat_id = this.$route.params.cat_id;
  },
  mounted() {
    this.hover = this.on;
  },
  computed: {
    anthorx() {
      return 160 + this.hover * 370;
    },
  },
  data() {
    return {
      cat_id: 0,
      on: 0,
      hover: 0,
      tabs: [
        {
          name: "猫咪介绍",
          component: CatIntroduction,
        },
        {
          name: "猫咪视频",
          component: SearchResultVideo,
        },
        {
          name: "猫咪动态",
          component: BlogCard,
        },
      ],
    };
  },
  components: {
    CatMain,
    NavBar,
  },
};
</script>

<style scoped>
.cat {
  margin-left: 200px;
  margin-right: 200px;
}
.container {
  width: 1000px;
  margin: 0 auto;
}

.name {
  display: inline-block;
  color: #212121;
  vertical-align: bottom;
  font-size: 30px;
  line-height: 80px;
}

.nav-switch {
  position: relative;
}

.nav-switch-item {
  display: inline-block;
  height: 56px;
  line-height: 56px;
  width: 33.3%;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  border-bottom: 1px solid #ccd0d7;
}

.nav-switch-item:hover {
  color: #00a1d6;
}

.nav-switch-item.on {
  color: #00a1d6;
}

.nav-switch-anchor {
  background-color: #00a1d6;
  height: 2px;
  width: 50px;
  display: block;
  position: absolute;
  left: 0;
  top: 54px;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-property: width, height, transform;
  will-change: transform;
  pointer-events: none;
  transition-duration: 200ms;
}

.nav-wrap {
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-bottom: 18px;
}
</style>