<template>
  <div class="total">
    <ul class="card-container clearfix">
      <li class="card" v-for="item in dataList" :key="item.vid">
        <div class="img">
          <router-link class="cover" :to="/video/ + item.vid">
            <img :src="item.cover" height="100" width="168" :alt="item.title" />
          </router-link>
        </div>
        <div class="info">
          <div class="title">
            <router-link :title="item.title" :to="/video/ + item.vid">{{item.title}}</router-link>
          </div>
          <div class="meta">
            <span class="watch_num" title="观看次数">
              <font-awesome-icon :icon="['fas', 'play']" />
              {{item.view_num}}
            </span>
            <span class="upload_time" title="上传时间">
              <font-awesome-icon :icon="['fas', 'clock']" />
              {{format(item.upload_time,"yyyy-MM-dd")}}
            </span>
          </div>
        </div>
      </li>
    </ul>
    <div class="page-wrap">
      <Pager :onChange="getData" ref="pager"></Pager>
    </div>
  </div>
</template>


<script>
import Pager from "@/components/Pager.vue";
import { searchVideo } from "../api";
export default {
  name: "VideoList",
  components: {
    Pager,
  },
  props: {
    query: String,
  },
  data() {
    return {
      dataList: [
        {
          vid: 0,
          title: "获取中",
          desc: "获取中",
          cover: "",
          view_num: 0,
          comment_num: 0,
          upload_time: 0,
          url: "",
          like_num: 0,
          favorite_num: 0,
          share_num: 0,
        },
      ],
    };
  },
  methods: {
    getData(page) {
      searchVideo(this.$props.query, page)
        .then((res) => {
          this.dataList = res.data.data;
        })
        .catch((err) => {
          this.$message.error("网络错误: " + err.response.data.status);
        });
    },
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
    update() {
      this.$refs.pager.reset();
      this.getData(0);
    },
  },
  mounted() {
    this.getData(0);
  },
};
</script>

<style scoped>
.card {
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
  font-weight: bold;
  font-size: 13px;
  float: left;
  margin-right: 32px;
  margin-top: 20px;
  position: relative;
  width: 168px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  box-sizing: content-box;
}

.title {
  margin-bottom: 12px;
  height: 40px;
  overflow: hidden;
}

.info {
  padding: 8px 10px 0;
}
.img img {
  display: block;
}
.img {
  height: 100px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}
.page-wrap {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.meta span {
  margin-right: 8px;
  margin-bottom: 12px;
  display: inline-block;
  font-size: 12px;
  height: 12px;
  vertical-align: text-top;
  line-height: 12px;
  position: relative;
  color: #99a2aa;
}
.meta svg {
  font-size: 8pt;
}
.meta span.watch_num {
  width: 57px;
  overflow: inherit;
}
.meta span.upload_time {
  width: 83px;
  margin-right: 0;
}
.card-container {
  margin-right: -32px;
}
</style>
