<template>
  <div class="rank-list">
    <header class="rank-header">
      <span class="name">
        <font-awesome-icon :icon="['fas', 'list-ol']" />&nbsp;排行榜
      </span>
      <div class="more tab-switch">
        <div class="tab-switch-item" :class="{on : on == 0}" @click="handleVideo">视频</div>
        <div class="tab-switch-item" :class="{on : on == 1}" @click="handleUser">用户</div>
        <div class="tab-switch-item" :class="{on : on == 2}" @click="handleCat">猫咪</div>
      </div>
    </header>
    <div class="rank-wrap" v-for="(item, index) in curHotlist" :key="item.vid">
      <span class="number" :class="{on : index < 3}">{{index + 1}}</span>
      <div class="preview" v-if="index < 3">
        <div class="pic" :class="{'user-pic':on>0}">
          <router-link :to="curPrefix + item[curIdName]" class="link">
            <img :src="(on==0?item.cover:(on==1?item.avatar:item.banner))" :alt="item.name" />
          </router-link>
        </div>
        <div class="txt">
          <router-link :to="curPrefix + item[curIdName]" class="link">
            <p :title="item.name" class="vname">{{item.name}}</p>
          </router-link>
        </div>
      </div>
      <router-link :to="curPrefix + item[curIdName]" class="link" v-else>
        <p :title="item.name" class="vname">{{item.name}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { hotVideo, hotUser, hotCat } from "../api";
export default {
  name: "Top",
  computed: {
    curHotlist() {
      if (this.on === 0) return this.videoHotList;
      else if (this.on === 1) return this.userHotList;
      else return this.nekoHotList;
    },
    curPrefix() {
      if (this.on === 0) return "/video/";
      else if (this.on === 1) return "/space/";
      else return "/cat/";
    },
    curIdName() {
      if (this.on === 0) return "vid";
      else if (this.on === 1) return "usid";
      else return "cat_id";
    },
  },
  data() {
    return {
      on: 0,
      videoHotList: [],
      userHotList: [],
      nekoHotList: [],
    };
  },
  methods: {
    async handleVideo() {
      this.on = 0;
      try {
        var res = await hotVideo();
        res = res.data;
        if (res.status === "ok") {
          this.videoHotList = res.data;
        } else {
          this.$message.error("网络错误: " + res.status);
        }
      } catch (e) {
        this.$message.error("网络错误: " + e.response.data.status);
      }
    },
    async handleUser() {
      this.on = 1;
      try {
        var res = await hotUser();
        res = res.data;
        if (res.status === "ok") {
          this.userHotList = res.data;
        } else {
          this.$message.error("网络错误: " + res.status);
        }
      } catch (e) {
        this.$message.error("网络错误: " + e.response.data.status);
      }
    },
    async handleCat() {
      this.on = 2;
      try {
        var res = await hotCat();
        res = res.data;
        if (res.status === "ok") {
          this.nekoHotList = res.data;
        } else {
          this.$message.error("网络错误: " + res.status);
        }
      } catch (e) {
        this.$message.error("网络错误: " + e.response.data.status);
      }
    },
  },
  mounted() {
    this.handleVideo();
  },
};
</script>

<style scoped>
.rank-list {
  width: 265px;
  position: inherit;
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
}

.rank-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  margin-bottom: 16px;
  padding-top: 10px;
}

.name {
  display: inline-block;
  color: #212121;
  vertical-align: bottom;
  font-size: 20px;
  line-height: 28px;
}

.more {
  display: inline-block;
  padding: 0 0 0 12px;
  color: #505050;
  text-align: center;
  transition: all 0.2s;
}

.tab-switch {
  display: flex;
}

.tab-switch-item {
  font-size: 14px;
  line-height: 30px;
  height: 30px;
  margin-right: 12px;
  cursor: pointer;
}

.tab-switch-item:hover,
.tab-switch-item.on {
  border-bottom: 1px solid #00a1d6;
  color: #00a1d6;
}

.rank-wrap {
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-bottom: 20px;
}

.number {
  font-size: 14px;
  color: #999;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  border-radius: 2px;
  display: inline-block;
}

.number.on {
  color: #fff;
  background: #00a1d6;
}

.vname {
  width: 225px;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.preview {
  width: 225px;
  display: flex;
  position: relative;
  font-weight: 500;
}

.preview .vname {
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pic {
  position: relative;
}

.pic img {
  width: 112px;
  height: 63px;
  border-radius: 2px;
  display: block;
}

.user-pic img {
  width: 63px;
  height: 63px;
  border-radius: 10px;
  display: block;
}

.txt {
  margin-left: 12px;
  width: 105px;
}
</style>