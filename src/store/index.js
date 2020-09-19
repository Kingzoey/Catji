import Vue from 'vue';
import Vuex from 'vuex';
import { userInfo } from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {}, // loginInfo接口缓存, 包括账号认证信息等
    me: {}, // userInfo信息缓存, 包括头像等
    pending: false,
    waitOnSuccess: [],
    waitOnFailed: []
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
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    // 退出登录
    logout(state) {
      // 清除状态
      state.user = {}
      state.me = {}
      // 清除本地存储
      localStorage.removeItem('user');
      localStorage.removeItem('me');
    },
    cacheGetMineInfo(state, payload) {
      let { onSuccess, onFailed, noCache } = payload;

      noCache = true;

      if (!noCache && state.me.usid) {
        onSuccess(state.me);
        return;
      }

      state.waitOnSuccess.push(onSuccess);
      state.waitOnFailed.push(onFailed);

      if (!state.pending) {
        state.pending = true;
        userInfo(state.user.usid)
          .then(res => {
            state.pending = false;
            res = res.data;
            if (res.status === "ok") {
              state.me = res.data;
              localStorage.setItem('me', JSON.stringify(res.data));
              state.waitOnSuccess.splice(0).forEach(onSucc => onSucc && onSucc(res.data));
              state.waitOnFailed.splice(0);
            } else {
              state.waitOnSuccess.splice(0);
              state.waitOnFailed.splice(0).forEach(onFail => onFail && onFail(res.status));
            }
          })
          .catch(e => {
            state.pending = false;
            state.waitOnSuccess.splice(0);
            state.waitOnFailed.splice(0).forEach(onFail => onFail(e.response.data.status));
          })
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
