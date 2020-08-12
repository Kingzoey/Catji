<template>
  <div class="SearchResult">
    <NavBar></NavBar>
    <SearchResultBar></SearchResultBar>
    <TagList></TagList>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchResultBar from "@/components/SearchResultBar.vue";
import NavBar from "@/components/NavBar.vue";
import TagList from "@/components/TagList.vue"
export default {
  name: "SearchResult",
  components: {
    NavBar,
    SearchResultBar,
    TagList,
  },
};
</script>