<template>
  <div class="login_1">
    <NavBar />
    <Loginn_1 style="background-color: #f0f0f0;"></Loginn_1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Loginn_1 from "@/components/Loginn_1.vue";
export default {
  name: "Login_1",
  components: {
    Loginn_1,
    NavBar,
  },
};
</script>
