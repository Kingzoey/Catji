<template>
  <div class="page">
    <div class="container clearfix">
      <div class="left">
        <BlogCard />
      </div>
      <div class="no-more">
        <img src="../assets/end.png" class="end-img" />
      </div>
      <div class="back-top" style="right: 0px;" @click="goTop">
        <i class="el-icon-creat-top goTopIcon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "@/components/MyBlogCard.vue";
export default {
  name: "Blog",
  components: {
    BlogCard,
  },
  data() {
    return {
      scrollTop: "",
      goTopShow: false,
    };
  },
  watch: {
    scrollTop() {
      if (this.scrollTop > 500) {
        this.goTopShow = true;
      } else {
        this.goTopShow = false;
      }
    },
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (this.scrollTop > 500) {
        this.goTopShow = true;
      }
    },
    goTop() {
      let timer = null,
        _that = this;
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function fn() {
        if (_that.scrollTop > 0) {
          _that.scrollTop -= 250;
          document.body.scrollTop = document.documentElement.scrollTop =
            _that.scrollTop;
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
          _that.goTopShow = false;
        }
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.page {
  background-color: #79d2ff;
}

.container {
  width: 1160px;
  margin: 0 auto;
  /* display: flex;
  justify-content: space-between; */
}

.left {
  width: 900px;
  float: left;
  margin-left: 25px;
}

.right {
  width: 244px;
  margin-left: 8px;
  float: right;
}

.no-more .end-img {
  margin-top: 18px;
  vertical-align: middle;
}

img {
  border: 0;
  outline: 0;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.back-top[data-v-37d58309] {
  position: fixed;
  bottom: 50px;
  width: 150px;
  height: 174px;
  cursor: pointer;
  z-index: 998;
  background-position: 0 0;
  text-align: center;
  background-image: url(//s2.hdslb.com/bfs/static/blive/blfe-dynamic-web/static/img/rocket_top.bcc748c3.png);
  background-repeat: no-repeat;
}
</style>
