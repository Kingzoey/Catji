<template>
    <div class="videolist">
        <NavBar2></NavBar2>
        <VideoListt></VideoListt>
    </div>
</template>

<script>
import VideoListt from "@/components/VideoListt.vue";
import NavBar2 from "@/components/NavBar.vue";
export default {
    name:"SearchResult",
    components: {
        VideoListt,
        NavBar2,
    }
}
</script>