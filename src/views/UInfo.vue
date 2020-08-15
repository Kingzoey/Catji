<template>
    <div class="userinfo">
        <NavBar2></NavBar2>
        <UserInfo></UserInfo>
    </div>
</template>

<script>
import UserInfo from "@/components/UserInfo.vue";
import NavBar2 from "@/components/NavBar.vue";
export default {
    name:"UInfo",
    components: {
        UserInfo,
        NavBar2,
    }
}
</script>