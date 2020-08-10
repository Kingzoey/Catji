<template>
    <div class="videolist">
        <videolist></videolist>
    </div>
</template>

<script>
import videolist from "@/components/VideoList.vue";
export default {
    name:"SearchResult",
    components: {
        videolist,
    }
}
</script>