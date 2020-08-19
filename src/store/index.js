import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      usid: 23333,
      name: "王小明",
      avatar: "https://www.baidu.com/img/flexible/logo/pc/result.png",
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
