<template>
  <div class="userlistt">
    <NavBar2></NavBar2>
    <UserListt style="background-color: #fbfbfb;"></UserListt>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar2 from "@/components/NavBar.vue";
import UserListt from "@/components/UserListt.vue";
export default {
  name: "UserList",
  components: {
    UserListt,
    NavBar2,
  },
};
</script>
