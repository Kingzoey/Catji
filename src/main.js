import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// 图标查询地址: https://fontawesome.com/icons?d=gallery&q=cat&m=free
// 使用方法:
// 1. 先在网站找到你所需要的的图标
// 2. 在下面两行注册图标的名字
// 3. 在需要放置图标的地方这样写 <font-awesome-icon :icon="['fas', 'cat']" />
// ! 这样可以保证没用到的图标不会被打包进入最终发布文件里
// 更多参考: https://github.com/FortAwesome/vue-fontawesome#installation
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons'
library.add(faCat, faDog)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
