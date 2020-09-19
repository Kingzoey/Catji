<template>
  <div class="root">
    <div class="grad">
      <router-link to="/" class="head-logo">
        <img height="150" src="../assets/Logo_fin.png" />
      </router-link>
    </div>
    <div class="headtype0">
      云上的吸猫 你我共享
    </div>
    <div class="WelcomeCat">
      <img src="../assets/Welcome_0.jpg" />
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<style scoped>
.root {
  box-sizing: content-box;
}

.grad {
  text-align: center;
}

.WelcomeCat {
  text-align: center;
}

.headtype {
  text-align: center;
  font-size: 40px;
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
}

.headtype0 {
  text-align: center;
  color: grey;
  font-size: 30px;
  margin-bottom: 20px;
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
}

</style>