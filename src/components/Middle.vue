<template>
  <div class="new-part">
    <div class="card">
      <header class="new-header">
        <span class="new-name">
          <slot name="header"></slot>
        </span>
      </header>
      <div class="new-list-top clearfix">
        <div class="top-left">
          <div class="big-item">
            <div class="cover">
              <router-link :to="/video/ + curHotlist[0].vid" class="link">
                <img :src="curHotlist[0].cover" height="208" width="370" :alt="curHotlist[0].name" />
              </router-link>
            </div>
            <div class="txt">
              <router-link :to="/video/ + curHotlist[0].vid" class="link">
                <p :title="curHotlist[0].name" class="vname">{{curHotlist[0].name}}</p>
              </router-link>
            </div>
          </div>
        </div>
        <div class="top-right">
          <div class="top-right-line">
            <div class="normal-item" v-for="item in curHotlist.slice(1,3)" :key="item.vid">
              <div class="cover">
                <router-link :to="/video/ + item.vid" class="link">
                  <img :src="item.cover" height="90" width="175" :alt="item.name" />
                </router-link>
              </div>
              <div class="txt">
                <router-link :to="/video/ + item.vid" class="link">
                  <p :title="item.name" class="vname">{{item.name}}</p>
                </router-link>
              </div>
            </div>
          </div>
          <div class="top-right-line">
            <div class="normal-item" v-for="item in curHotlist.slice(3,5)" :key="item.vid">
              <div class="cover">
                <router-link :to="/video/ + item.vid" class="link">
                  <img :src="item.cover" height="90" width="175" :alt="item.name" />
                </router-link>
              </div>
              <div class="txt">
                <router-link :to="/video/ + item.vid" class="link">
                  <p :title="item.name" class="vname">{{item.name}}</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-line">
            <div class="normal-item" v-for="item in curHotlist.slice(5,9)" :key="item.vid">
              <div class="cover">
                <router-link :to="/video/ + item.vid" class="link">
                  <img :src="item.cover" height="90" width="175" :alt="item.name" />
                </router-link>
              </div>
              <div class="txt">
                <router-link :to="/video/ + item.vid" class="link">
                  <p :title="item.name" class="vname">{{item.name}}</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Middle",
  props: {
    getData: Function,
  },
  data() {
    return {
      curHotlist: [
        {
          vid: 100001,
          name: "获取中...",
          cover: "",
          up: {
            usid: 100001,
            name: "获取中...",
          },
        },
        {
          vid: 100002,
          name: "获取中...",
          cover: "",
          up: {
            usid: 100002,
            name: "获取中...",
          },
        },
        {
          vid: 100003,
          name: "获取中...",
          cover: "",
          up: {
            usid: 100003,
            name: "获取中...",
          },
        },
        {
          vid: 100004,
          name: "获取中...",
          cover: "",
          up: {
            usid: 100004,
            name: "获取中...",
          },
        },
        {
          vid: 100005,
          name: "获取中...",
          cover: "",
          up: {
            usid: 100005,
            name: "获取中...",
          },
        },
        {
          vid: 100006,
          name: "获取中...",
          cover: "",
          up: {
            usid: 100006,
            name: "获取中...",
          },
        },
        {
          vid: 100007,
          name: "获取中...",
          cover: "",
          up: {
            usid: 100007,
            name: "获取中...",
          },
        },
        {
          vid: 100008,
          name: "获取中...",
          cover: "",
          up: {
            usid: 100008,
            name: "获取中...",
          },
        },
        {
          vid: 100009,
          name: "获取中...",
          cover: "",
          up: {
            usid: 100009,
            name: "获取中...",
          },
        },
      ],
    };
  },
  async mounted() {
    try {
      var res = await this.$props.getData();
      res = res.data;
      if (res.status === "ok") {
        this.curHotlist = res.data;
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
.new-part {
  height: 100%;
}

.card img {
  border-radius: 5px;
  display: block;
}

.card {
  padding-left: 30px;
  padding-top: 10px;
}

.new-part {
  position: inherit;
}

.new-list-top {
  white-space: nowrap;
  margin-top: 10px;
}

.new-name {
  font-size: 22px;
  line-height: 36px;
}

.new-header {
  height: 36px;
}

.top-left {
  display: inline-block;
  vertical-align: top;
}

.bottom {
  float: left;
}

.normal-item {
  float: left;
  width: 195px;
  height: 118px;
}

.top-right {
  display: inline-block;
  vertical-align: top;
  margin-left: 20px;
}

.top-right-line {
}

.txt {
  width: 175px;
}

.vname {
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
