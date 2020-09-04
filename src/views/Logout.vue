<template>
  <div>正在注销，成功后将会自动跳转到原来页面...</div>
</template>

<script>
import { logout } from "@/api";
export default {
  props: { src: String },
  async mounted() {
    try {
      let res = await logout();
      res = res.data;
      if (res.status == "ok") {
        this.$store.state.user = {};
        let src = this.$route.query.src || "/";
        this.$router.push({ path: src });
      } else {
        this.$message.error("网络错误");
      }
    } catch (e) {
      let res = e.response.data;
      if (res.status == "not login") {
        this.$store.state.user = {};
        let src = this.$route.query.src || "/";
        this.$router.push({ path: src });
      } else {
        this.$message.error("网络错误");
      }
    }
  },
};
</script>

<style>
</style>