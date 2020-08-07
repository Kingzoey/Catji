<template>
  <div class="search">
    <NavBar></NavBar>
    <SearchBar></SearchBar>
    <br />
    <br />
    <SearchHistory></SearchHistory>
     <HotSearch></HotSearch>
    
  </div>
</template>

<script>
// @ is an alias to /src
import SearchHistory from "@/components/SearchHistory.vue";
import NavBar from "@/components/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";
import HotSearch from "@/components/HotSearch.vue";
export default {
  name: "Search",
  components: {
    SearchHistory,
    NavBar,
    SearchBar,
    HotSearch,
  },
};
</script>



<style scoped>

.search {
 
    background: url("../assets/backgroundd.jpg");
    
}

</style>