import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueVideoPlayer)
Vue.use(Element)

// 图标查询地址: https://fontawesome.com/icons?d=gallery&q=cat&m=free
// 使用方法:
// 1. 先在网站找到你所需要的的图标
// 2. 在下面两行注册图标的名字
// 3. 在需要放置图标的地方这样写 <font-awesome-icon :icon="['fas', 'cat']" />
// ! 这样可以保证没用到的图标不会被打包进入最终发布文件里
// 更多参考: https://github.com/FortAwesome/vue-fontawesome#installation
import { faCamera, faChild, faUser, faSearch, faCat, faDog, faList, faBookmark, faEdit, faSmile, faHistory, faFolder, faUpload, faDatabase, faBlog, faStore, faRocket, faPen, faCalendar, faAt, faTransgender, faMars, faVenus, faMask, faListOl, faVenusMars, faFireAlt, faHashtag, faNewspaper, faImages, faBook, faFile, faHatCowboy, faBirthdayCake, faLaugh, faHeart, faVideo, faChevronDown, faChevronUp, faThumbsUp, faStar, faShareSquare, faCommentAlt, faEnvelope, faPlus, faTrashAlt, faFire, faKey } from '@fortawesome/free-solid-svg-icons'

library.add(faCamera, faChild, faUser, faSearch, faCat, faDog, faList, faBookmark, faEdit, faSmile, faHistory, faFolder, faUpload, faDatabase, faBlog, faStore, faRocket, faPen, faCalendar, faAt, faTransgender, faMars, faVenus, faMask, faListOl, faVenusMars, faFireAlt, faHashtag, faNewspaper, faImages, faBook, faFile, faHatCowboy, faBirthdayCake, faLaugh, faHeart, faVideo, faChevronDown, faChevronUp, faThumbsUp, faStar, faShareSquare, faCommentAlt, faEnvelope, faPlus, faTrashAlt, faFire, faKey)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')