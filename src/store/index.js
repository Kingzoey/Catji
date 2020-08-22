import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      usid: 23333,
      name: "王大橘",
      avatar: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3113236089,387341124&fm=26&gp=0.jpg",
      follower_num: 123,
      followee_num: 321,
      upload_num: 1,
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
