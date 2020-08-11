<template>
  <div class="tagg">
  <NavBar2></NavBar2>
    <Tagg style="background-color: #fbfbfb;"></Tagg>
    <VideoListt></VideoListt>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar2 from "@/components/NavBar.vue";
import Tagg from "@/components/Tagg.vue";
import VideoListt from "@/components/VideoListt.vue";
export default {
  name: "Tag",
  components: {
    VideoListt,
    Tagg,
    NavBar2,
  },
};
</script>
