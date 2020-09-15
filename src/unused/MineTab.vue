<template>
    <div class="MineTab">
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
            </ul>
      </div>
      <component :is="tabs[on].component"></component>
    </div>
</template>

<script>
export default {
    name:"MineTab",
    
  data() {
    return {
      on: 0,
      hover: 0,
      tabs: [
        { name: "欢迎", component: () => import("../components/VideoListt.vue") },
        { name: "收藏夹", component: () => import("../components/ListView.vue") },
        { name: "观看历史", component: () => import("../components/ListView.vue") },
        { name: "投稿管理", component: () => import("../components/TagList.vue") },
        { name: "设置", component: () => import("../components/TagList.vue") },
      ],
    };
  },
  mounted() {
    this.hover = this.on;
  },
  methods: {},
}
</script>

<style scoped>
.nav-switch-item {
  display: inline-block;
  height: 56px;
  line-height: 56px;
  width: 20%;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  border-bottom: 1px solid #ccd0d7;
}

.nav-switch-item:hover {
  color: pink;
}

.nav-switch-item.on {
  color: pink;
}

.nav-switch-anchor {
  background-color: pink;
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
</style>
