
<template>
  <!--话题结果-->
  <div class="card-topic">
    <div class="card-topic-a">
      <img src class="spic" />
      <div class="info">
        <div class="title">
          <h1>
            <a href="javascript:void(0);">#Catji#</a>
          </h1>
          <div>
            <a href="javascript:void(0);" class="s-btn-c">分享</a>
            <a href class="s-btn-c">申请主持人</a>
          </div>
        </div>
        <div class="total">
          <span>阅读45.2亿</span>
          <span>讨论44.7万</span>
        </div>
      </div>
    </div>
    <!--话题头部主导航-->
    <div class="container">
      <ul class="tab clearfix">
        <li
          class="tab-item"
          :class="{on:index==on}"
          v-for="(tab, index) in tablist"
          :key="tab.name"
        >
          <a href="javascript:void(0);" @click="on = index">
            <font-awesome-icon :icon="['fas', tab.iconname]" />
            {{tab.name}}
          </a>
        </li>
      </ul>
      <component :is="tablist[on].tab"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "Space",
  components: {},
  methods: {},
  data() {
    return {
      on: 0,
      tablist: [
        {
          name: "视频",
          iconname: "video",
          tab: () => import("@/components/VideoListtTagResult.vue"),
        },
        {
          name: "动态",
          iconname: "blog",
          tab: () => import("@/components/BlogCardSearch.vue"),
        },
      ],
    };
  },
  mounted() {
    console.log(this.$route.params.usid);
  },
};
</script>

<style scoped>
* {
  margin: 5;
  padding: 0;
  list-style: none;
}

.container {
  padding: 50 50 50 50px;
  margin: left 500px;
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
}

.tab-item {
  margin: 16px auto;
  padding: 0 0 0 448px;
  overflow: visible;
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

/*change*/

.m-main-nav {
  text-align: center;
  margin-bottom: 100px;
}
/* card */

/* 璇濋 */
.card-topic {
  background: #fff;
}
.card-topic .icon-ad {
  vertical-align: -3px;
  margin-left: 10px;
}
.card-topic-a .up-pic {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 97px;
  height: 26px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
}
.card-topic-a .up-pic a {
  display: block;
  text-align: center;
  line-height: 26px;
  color: #333;
  background: #fff;
}
.card-topic-a .up-pic input {
  width: 97px;
  height: 26px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.card-topic-a {
  padding: 26px 200px;
  border-bottom: 1px solid rgb(232, 248, 255);
  position: relative;
}
.card-topic-a .spic,
.card-topic-a .info {
  display: inline-block;
  vertical-align: middle;
}
.card-topic-a .spic {
  border-radius: 3px;
  width: 70px;
  height: 70px;
  margin-right: 20px;
}
.card-topic-a .info .title {
  margin-bottom: 5px;
  height: 28px;
}
.card-topic-a .info .title h1,
.card-topic-a .info .title div {
  float: left;
}
.card-topic-a .info .title h1 {
  margin-right: 20px;
  font-size: 22px;
  font-weight: bolder;
}
.card-topic-a .info .title .s-btn-c {
  margin-right: 20px;
}
.card-topic-a .info .title span {
  position: relative;
}
.card-topic-a .info .title span .btn-cancel {
  position: absolute;
  top: 21px;
  left: 0;
  margin-right: 0;
  padding: 5px 19px;
  box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
}
.card-topic-a .info .total {
  font-size: 14px;
  color: #636363;
  margin-top: 10px;
}
.card-topic-a .info .total span {
  margin-right: 10px;
}
/* card-topic */
.card-topic-lead {
  padding: 16px;
  font-size: 14px;
  border-bottom: 1px solid rgb(232, 248, 255);
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

.tagg {
  background-color: rgb(232, 248, 255);
}
</style>
