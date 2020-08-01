<template>
  <div class="search">
    <SearchHistory style="background-color: #f0f0f0;"></SearchHistory>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchHistory from "@/components/SearchHistory.vue";
export default {
  name: "Search",
  components: {
    SearchHistory,

  },
};
</script>
