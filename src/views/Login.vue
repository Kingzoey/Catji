<template>
  <div class="login">
    <NavBar />
    <Loginn style="background-color: #f0f0f0;"></Loginn>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Loginn from "@/components/Loginn.vue";
export default {
  name: "Login",
  components: {
    Loginn,
    NavBar,
  },
};
</script>
