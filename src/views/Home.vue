<template>
  <div class="home">
    <Top style="background-color: #f0f0f0;"></Top>
    <Middle></Middle>
    <Middle2></Middle2>
    <Middle3></Middle3>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top.vue";
import Middle from "@/components/Middle.vue";
import Middle2 from "@/components/Middle2.vue";
import Middle3 from "@/components/Middle3.vue";
export default {
  name: "Home",
  components: {
    Top,
    Middle,
    Middle2,
    Middle3
  },
};
</script>
