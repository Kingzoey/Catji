<template>
  <div class="cat">
    <NavBar2></NavBar2>
    <CatMain style="background-color: #fbfbfb;"></CatMain>
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
            >{{item.name}}
            </li>
            <li class="nav-switch-anchor" :style="{transform: 'translateX('+anthorx+'px)'}" />
        </ul>
      </div>
      <component :is="tabs[on].component"></component>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar2 from "@/components/NavBar.vue";
import CatMain from "@/components/CatMain.vue";
export default {
  name: "Cat",
    mounted() {
      this.hover = this.on;
    },
    computed: {
      anthorx() {
        return 228 + this.hover * 505;
      },
    },
    data() {
      return {
        on: 0,
        hover: 0,
        tabs: [
          { name: "猫咪介绍", component: () => import("../components/CatIntroduction.vue") },
          { name: "猫咪视频", component: () => import("../components/VideoListt.vue") },
          { name: "猫咪动态", component: () => import("../components/BlogCard.vue") },
          
        ],
      };
    },
  components: {

    CatMain,
    NavBar2,
  },
};
</script>


<style scoped>
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

.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  margin-bottom: 16px;
  background: url("../assets/backgroundd.jpg");
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
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 18px;
}
</style>