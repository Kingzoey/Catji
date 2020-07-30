<template>
  <div class="home">
    <Top style="background-color: #f0f0f0;"></Top>
    <Middle></Middle>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top.vue";
import Middle from "@/components/Middle.vue";
export default {
  name: "Home",
  components: {
    Top,
    Middle,
  },
};
</script>
