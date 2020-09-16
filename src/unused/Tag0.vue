<template>
  <div class="Tagg0">
  <NavBar2></NavBar2>
    <Tagg0 style="background-color: #fbfbfb;"></Tagg0>
    <VideoListt></VideoListt>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar2 from "@/components/NavBar.vue";
import Tagg0 from "@/components/Tagg0.vue";
import VideoListt from "@/components/VideoListt.vue";
export default {
  name: "Tag",
  components: {
    VideoListt,
    Tagg0,
    NavBar2,
  },
};
</script>
