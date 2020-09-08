import Vue from 'vue';
import Vuex from 'vuex';
import { userInfo } from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      usid: 0,
      nickname: "未登录",
      avatar: '',
      follower_num: 0,
      followee_num: 0,
      upload_num: 0,
    },
    me: {}
  },
  mutations: {
    // // 页面刷新时防止信息丢失可以掉用本地存储获取用户信息
    // loadUser(state) {
    //   let user = localStorage.getItem('user')
    //   if (user) {
    //     state.user = JSON.parse(user)
    //   }
    // },
    // 登录
    login(state, user) {
      // 保存登录状态
      state.user = user
      // 存储到本地存储
      // localStorage.setItem('user', JSON.stringify(state.user))
    },
    // 退出登录
    logout(state) {
      // 清除状态
      state.user = {}
      // 清除本地存储
      // localStorage.removeItem('user');
      // localStorage.removeItem('me');
    },
    cacheGetMineInfo(state, onSuccess, onFailed) {
      if (state.me.usid) {
        onSuccess(state.me);
      } else {
        userInfo(state.user.usid)
          .then(res => {
            res = res.data;
            if (res.status === "ok") {
              state.me = res.data;
              // localStorage.setItem('me', JSON.stringify(res.data));
              onSuccess(state.me);
            } else {
              onFailed(res);
            }
          })
          .catch(onFailed)
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
