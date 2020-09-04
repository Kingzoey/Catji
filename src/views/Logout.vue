<template>
  <div>正在注销，成功后将会自动跳转到原来页面...</div>
</template>

<script>
import { logout } from "@/api";
export default {
  props: { src: String },
  async mounted() {
    try {
      var res = await logout();
      if (res.status == "ok" || res.status == "not login") {
        this.$store.state.user = {};
        let src = this.$route.query.src;
        this.$router.push(src);
      }
    } catch (e) {
      if (e.response.data.status == "not login") {
        this.$store.state.user = {};
        let src = this.$route.query.src;
        this.$router.push(src);
      }
    }
  },
};
</script>

<style>
</style>