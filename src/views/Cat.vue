<template>
  <div class="tagg">
    <NavBar2></NavBar2>
    <CatMain style="background-color: #fbfbfb;"></CatMain>
    
    <VideoListt></VideoListt>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar2 from "@/components/NavBar.vue";
import CatMain from "@/components/CatMain.vue";
import VideoListt from "@/components/VideoListt.vue";
export default {
  name: "Tag",
  components: {
    VideoListt,
    CatMain,
    NavBar2,
  },
};
</script>
