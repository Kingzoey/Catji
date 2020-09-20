<template>
  <div class="all">
    <div class="header">
      <div class="title-upl">
        <font-awesome-icon :icon="['fas', 'upload']" />&nbsp;我的投稿
      </div>
      <div class="pager-wrap clearfix">
        <Pager :onChange="getData" ref="pager" :page_num="page_num" />
      </div>
    </div>
    <ul>
      <li class="vi-item" v-for="vi in dataList" :key="vi.vid">
        <div class="v-cover">
          <router-link :to="/video/ + vi.vid" :title="vi.title" class="coverimg">
            <div class="lazy-img">
              <img :src="vi.cover" />
            </div>
          </router-link>
        </div>
        <div class="info-wrap">
          <div class="headline">
            <router-link :to="/video/ + vi.vid" :title="vi.title" class="title">{{vi.title}}</router-link>
          </div>
          <div class="desc">
            <span class="watch_num" title="观看次数">
              <font-awesome-icon :icon="['fas', 'play']" />
              {{vi.watch_num}}
            </span>
            <span class="upload_time" title="上传时间">
              <font-awesome-icon :icon="['fas', 'clock']" />
              {{format(vi.create_time,"yyyy-MM-dd")}}
            </span>
            <button class="attention-a" @click="del(index)">删除视频</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { myWork } from "../api";
import Pager from "@/components/Pager.vue";
export default {
  components: {
    Pager,
  },
  props: {
    usid: Number,
  },
  computed: {
    page_num() {
      return Math.round(this.count / 10);
    },
  },
  data() {
    return {
      dataList: [],
      count: 1,
    };
  },
  methods: {
    format(timestamp, fmt) {
      var date = new Date(1000 * timestamp);
      var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds(), //毫秒
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      }
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
        }
      }
      return fmt;
    },
    del(index) {
      index; // 目前不支持删除投稿
    },
    getData(page) {
      myWork(this.$props.usid, page) // 函数调用返回的是Promise
        .then((res) => {
          res = res.data;
          if (res.status === "ok") {
            this.dataList = res.data.result; // 请求成功后, this.video会被设置为res.data的内容, 从而触发页面更新
            this.count = res.data.count;
          } else {
            this.$message.error("网络错误: " + res.status);
          }
        })
        .catch((err) => {
          this.$message.error("网络错误: " + err.data.response.status);
        });
    },
  },
  mounted() {
    this.getData(0);
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-left: 8px;
}

.title-upl {
  color: orange;
  font-size: 20px;
}

.vi-item {
  position: relative;
  padding: 20px 0 10px 102px;
  border-bottom: 1px solid #e5e9ef;
  z-index: 1;
}
.v-cover {
  position: absolute;
  width: 80px;
  height: 80px;
  padding: 0px;
  left: 10px;
  top: 9.8px;
}
.coverimg {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}
.lazy-img {
  width: 100%;
  height: 100%;
  display: inline-block;
}
.lazy-img img {
  width: 90px;
  height: 90px;
}
.headline {
  margin-bottom: 12px;
}
.title {
  display: inline-block;
  line-height: 21px;
  vertical-align: middle;
  font-size: 16px;
  color: #222;
  margin-right: 14px;
  font-weight: 700;
}

.desc {
  margin-bottom: 14px;
  width: 750px;
  font-size: 14px;
  color: #6d757a;
  line-height: 16px;
}

.attention-btn {
  width: 65px;
  height: 24px;
  text-align: center;
  background: orange;
  color: #fff;
  line-height: 24px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  float: right;
}
.attention-a {
  width: 80px;
  height: 24px;
  text-align: center;
  background: rgb(223, 37, 37);
  color: #fff;
  line-height: 24px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
}
.headline :hover {
  color: orange;
}
.pager-wrap {
  display: flex;
  justify-content: right;
  padding-right: 10px;
}
</style>