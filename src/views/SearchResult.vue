<template>
  <div class="SearchResult">
    <NavBar></NavBar>
    <SearchBar></SearchBar>
    <br />
    <br />
    <header class="SearchResult-header">
      <span class="name">搜索结果</span>
      <div class="more tab-switch">
        <div class="tab-switch-item" :class="{on : on == 0}" @click="on = 0">视频</div>
        <div class="tab-switch-item" :class="{on : on == 1}" @click="on = 1">用户</div>
        <div class="tab-switch-item" :class="{on : on == 2}" @click="on = 2">猫咪</div>
        <div class="tab-switch-item" :class="{on : on == 3}" @click="on = 3">tag</div>
      </div>
    </header>
    <div class="SearchResult-wrap" v-for="(item, index) in curHotlist" :key="item.id+item.url">
      <span class="number" :class="{on : index < 4}">{{index + 1}}</span>
      <div class="preview" v-if="index < 4">
        <div class="pic">
          <router-link :to="item.url" class="link">
            <img :src="item.cover" :alt="item.title" />
          </router-link>
        </div>
        <div class="txt">
          <router-link :to="item.url" class="link">
            <p :title="item.title" class="title">{{item.title}}</p>
          </router-link>
        </div>
      </div>
      <router-link :to="item.url" class="link" v-else>
        <p :title="item.title" class="title">{{item.title}}</p>
      </router-link>
    </div>
  </div>
</template>    




<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "SearchResult",
  components: {
    NavBar,
  },
  computed: {
    curHotlist() {
      if (this.on === 0) return this.videoHotList;
      else if (this.on === 1) return this.userHotList;
      else if (this.on === 2) return this.nekoHotList;
      else return this.tagHotList;
    },
  },
  data() {
    return {
      on: 0,
    };
  },
};
</script>


<style scoped>
.SearchResult-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  margin-bottom: 16px;
}

.name {
  display: inline-block;
  color: #212121;
  vertical-align: bottom;
  font-size: 30px;
  line-height: 40px;
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
  font-size: 20px;
  line-height: 40px;
  height: 30px;
  margin-right: 300px;
  cursor: pointer;
}

.tab-switch-item.on {
  border-bottom: 1px solid #00a1d6;
  color: #00a1d6;
}

.SearchResult-wrap {
  display: flex;
  position: relative;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 18px;
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

.title,
.preview {
  width: 235px;
}

.title {
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.preview {
  width: 235px;
  display: flex;
  position: relative;
  font-weight: 500;
}

.pic {
  position: relative;
}

.pic img {
  width: 112px;
  height: 63px;
  border-radius: 2px;
}

.txt {
  margin-left: 12px;
}
</style>
    