<template>
  <div class="tagg">
    <NavBar />
    <Tagg style="background-color: rgb(232, 248, 255);"></Tagg>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Tagg from "@/components/Tagg.vue";
export default {
  name: "Tag",
  components: {
    Tagg,
    NavBar,
  },
};
</script>
