<template>
    <div class="SearchResult">
        <taglist></taglist>
    </div>
</template>

<script>
import taglist from "@/components/TagList.vue";
export default {
    name:"SearchResult",
    components: {
        taglist,
    }
}
</script>