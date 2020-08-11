<template>
  <div class="SearchResult">
    <NavBar></NavBar>
   <SearchResultBar></SearchResultBar>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchResultBar from "@/components/SearchResultBar.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "SearchResult",
  components: {
    NavBar,
    SearchResultBar,
  },
};
</script>