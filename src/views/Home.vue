<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Top></Top>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Top from '@/components/Top.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Top
  }
}
</script>
