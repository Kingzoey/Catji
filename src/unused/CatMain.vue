<template>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      cat_id: 0,
      cat: {
        cat_id: 0,
        name: "获取中...",
        description: "获取中...",
        banner: "",
        usid: 0,
      },
    };
  },
  beforeCreate() {
    this.cat_id = this.$route.params.cat_id;
  },
  mounted() {
    catInfo(this.cat_id)
      .then((res) => {
        this.cat = res.data.data;
      })
      .catch((err) => {
        this.$message.error("网络错误: " + err.response.data.status);
      });
  },
};
</script>

<style scoped>
.card-wrap {
  margin-bottom: 10px;
  border-radius: 2px;
  border: 1px solid #eee;
  background: #fff;
}
/* card */
.pic {
  text-align: center;
}
.info {
  margin-left: 700px;
}
</style>
