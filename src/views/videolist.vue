<template>
    <div class="videolist">
        <NavBar2></NavBar2>
        <videolist></videolist>
    </div>
</template>

<script>
import videolist from "@/components/VideoList.vue";
import NavBar2 from "@/components/NavBar.vue";
export default {
    name:"SearchResult",
    components: {
        videolist,
        NavBar2,
    }
}
</script>