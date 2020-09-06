<template>
  <div class="Mine0">
    <NavBar></NavBar>
    <MineTab0></MineTab0>
    <MineInfo></MineInfo>
  </div>
</template>

<script>
import MineTab0 from "@/components/MineTab0.vue";
import NavBar from "@/components/NavBar.vue";
import MineInfo from "@/components/MineInfo.vue";
export default {
    name: "Mine0",
  components: {
    MineTab0,
    NavBar,
    MineInfo,
  },
}
</script>