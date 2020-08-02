<template>
  <div class="rigister">
    <Top style="background-color: #f0f0f0;"></Top>
    <rigister></rigister>
  </div>
</template>

<script>
// @ is an alias to /src
import rigister from "@components/Rigister.Vue"
export default {
  name: "Home",
  components: {
    rigister,
  },
};
</script>