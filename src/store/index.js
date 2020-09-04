import Vue from 'vue'
import Vuex from 'vuex'
import noface from "@/assets/userhead.png";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      usid: 0,
      nickname: "未登录",
      avatar: noface,
      follower_num: 0,
      followee_num: 0,
      upload_num: 0,
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
