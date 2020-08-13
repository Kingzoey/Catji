<template>
  <div class="ulistt">
  <NavBar2></NavBar2>
    <UListt style="background-color: #fbfbfb;"></UListt>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar2 from "@/components/NavBar.vue";
import UListt from "@/components/UListt.vue";
export default {
  name: "UList",
  components: {
    UListt,
    NavBar2,
  },
};
</script>
