<template>
  <div class="tagg">
    <NavBar />
    <div class="tagg-wrap" style="background-color: rgb(232, 248, 255);">
      <div class="card-topic">
        <img class="spic" src="/img/logo_demo2_00.ee314634.png" />
        <div class="info">
          <div class="title">
            <h1>#{{tag_info.name}}#</h1>
          </div>
          <div class="total">
            <span>阅读 {{tag_info.read_num || Math.round(Math.random() * 1234)}}</span>
            <span>讨论 {{tag_info.topic_num || Math.round(Math.random() * 1234)}}</span>
          </div>
        </div>
      </div>
      <!--话题头部主导航-->
      <div class="container">
        <ul class="tab">
          <li
            class="tab-item"
            :class="{on:index==on}"
            v-for="(tab, index) in tablist"
            :key="tab.name"
          >
            <a @click="on = index">
              <font-awesome-icon :icon="['fas', tab.iconname]" />
              {{tab.name}}
            </a>
          </li>
        </ul>
        <component :is="tablist[on].tab" :tag_id="Number(this.$route.params.tag_id)"></component>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { tagInfo } from "../api";
import NavBar from "@/components/NavBar.vue";
import TagVideo from "@/components/TagVideo.vue";
import TagBlog from "@/components/TagBlog.vue";
export default {
  name: "Tag",
  components: {
    NavBar,
  },
  data() {
    return {
      on: 0,
      tag_info: {
        tag_id: 0,
        name: "",
        read_num: 0,
        topic_num: 0,
      },
      tablist: [
        {
          name: "视频",
          iconname: "video",
          tab: TagVideo,
        },
        {
          name: "动态",
          iconname: "blog",
          tab: TagBlog,
        },
      ],
    };
  },
  async mounted() {
    let tag_id = this.$route.params.tag_id;
    if (tag_id === undefined) {
      this.$message.error("参数错误");
      this.$router.go(-1);
      return;
    }
    try {
      let res = await tagInfo(tag_id);
      res = res.data;
      if (res.status === "ok") {
        this.tag_info = res.data;
      } else {
        this.$message.error("网络错误: " + res.status);
      }
    } catch (e) {
      this.$message.error("网络错误: " + e.response.data.status);
    }
  },
};
</script>


<style scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
}

.tab :hover {
  color: #5dceea;
}

.tab {
  font-weight: normal;
  font-size: 18px;
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
  border-bottom: 1px solid rgb(232, 248, 255);
  display: flex;
  height: 40px;
  align-content: center;
  justify-content: space-around;
}

.tab-item {
  display: block;
  float: left;
}

.tab-item.on a {
  color: pink;
}

.tab-item a {
  overflow: visible;
  padding: 0 8px;
  border: none;
  font-weight: normal;
  font-size: 18px;

  height: 36px;
  margin-right: 4px;
  color: #999;
}

.tab-item a svg {
  color: #3a9bd9;
}

.tab-item.on a svg {
  color: pink;
}

.card {
  margin-left: 200px;
  margin-right: 200px;
}

.card-topic {
  background: #fff;
  width: 1000px;
  margin: 0 auto;
  border-radius: 4px;
  position: relative;
  padding: 10px;
}
.spic,
.info {
  display: inline-block;
  vertical-align: middle;
}
.spic {
  border-radius: 3px;
  width: 100px;
  height: 70px;
}
.title {
  margin-bottom: 5px;
  height: 28px;
}
.title h1,
.title div {
  float: left;
}
.title h1 {
  margin-right: 20px;
  font-size: 22px;
  font-weight: bolder;
}
.title .s-btn-c {
  margin-right: 20px;
}
.title span {
  position: relative;
}
.title span .btn-cancel {
  position: absolute;
  top: 21px;
  left: 0;
  margin-right: 0;
  padding: 5px 19px;
  box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
}
.total {
  font-size: 14px;
  color: #636363;
  margin-top: 10px;
}
.total span {
  margin-right: 10px;
}

/* button */
.s-btn-c {
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  border-radius: 2px;
  padding: 0;
}
.s-btn-c {
  font-size: 12px;
  min-width: 40px;
  height: 24px;
  line-height: 25px;
  border: 1px solid #d9d9d9;
  background: #fff;
}

.tagg-wrap {
  background-color: rgb(232, 248, 255);
  padding-top: 20px;
}
</style>
