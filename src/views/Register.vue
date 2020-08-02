<template>
  <div class="register">
  <NavBar2></NavBar2>
    <Registerr style="background-color: #f0f0f0;"></Registerr>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar2 from "@/components/NavBar2.vue";
import Registerr from "@/components/Registerr.vue";
export default {
  name: "Register",
  components: {
    Registerr,
    NavBar2,
  },
};
</script>
