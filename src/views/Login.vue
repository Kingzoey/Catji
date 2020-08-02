<template>
  <div class="login">
  <NavBar2></NavBar2>
    <Loginn style="background-color: #f0f0f0;"></Loginn>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar2 from "@/components/NavBar2.vue";
import Loginn from "@/components/Loginn.vue";
export default {
  name: "Login",
  components: {
    Loginn,
    NavBar2,
  },
};
</script>
