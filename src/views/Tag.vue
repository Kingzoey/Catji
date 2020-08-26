<template>
  <div class="tagg">
  <NavBar2></NavBar2>
    <Tagg style="background-color: rgb(232, 248, 255);"></Tagg>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar2 from "@/components/NavBar.vue";
import Tagg from "@/components/Tagg.vue";
export default {
  name: "Tag",
  components: {
    Tagg,
    NavBar2,
  },
};
</script>
