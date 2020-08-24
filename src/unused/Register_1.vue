<template>
  <div class="register_1">
    <NavBar />
    <Registerr_1 style="background-color: #f0f0f0;"></Registerr_1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Registerr_1 from "@/components/Registerr_1.vue";
export default {
  name: "Register_1",
  components: {
    Registerr_1,
    NavBar,
  },
};
</script>
