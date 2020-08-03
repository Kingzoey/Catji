<template>
  <div class="rank-list">
    <header class="rank-header">
      <span class="name">搜索历史</span>
      <div class="more tab-switch">
        <div class="tab-switch-item" :class="{on : on == 0}" @click="on = 0">搜索</div>
      </div>
    </header>
    <div class="rank-wrap" v-for="(item, index) in curHotlist" :key="item.id+item.url">
      <span class="number" :class="{on : index < 0}">{{index + 1}}</span>
      <router-link :to="item.url" class="link">
        <p :title="item.title" class="title">{{item.title}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchHistory",
  computed: {
    curHotlist() {
      return this.search_history;
    },
  },
  data() {
    return {
      on: 0,
      search_history: [
        {
          id: 100000,
          url: "/search/100000",
          title: "记录",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100001,
          url: "/search/100001",
          title: "记录",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100002,
          url: "/search/100002",
          title: "记录",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100003,
          url: "/search/100003",
          title: "记录",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100004,
          url: "/search/100004",
          title: "记录",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100005,
          url: "/search/100005",
          title: "记录",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100006,
          url: "/search/100006",
          title: "记录",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100006,
          url: "/search/100006",
          title: "记录",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100006,
          url: "/search/100006",
          title: "记录",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100006,
          url: "/search/100006",
          title: "记录",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
      ],
    };
  },
};
</script>

<style scoped>
.rank-list {
  width: 320px;
}

.rank-header {
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
  margin-right: 24px;
  cursor: pointer;
}

.tab-switch-item.on {
  border-bottom: 1px solid #00a1d6;
  color: #00a1d6;
}

.rank-wrap {
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

.title {
  width: 290px;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>