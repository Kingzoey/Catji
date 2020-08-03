<template>
  <div class="search">
    <NavBar2></NavBar2>
    <SearchBar></SearchBar>
    <br />
    <br />
    <SearchHistory></SearchHistory>
    <SearchHistory></SearchHistory>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchHistory from "@/components/SearchHistory.vue";
import NavBar2 from "@/components/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";
export default {
  name: "Search",
  components: {
    SearchHistory,
    NavBar2,
    SearchBar,
  },
};
</script>
