import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/test',
        name: 'Test',
        component: () =>
            import ('../views/Test.vue')
    },
    {
        path: '/tag',
        name: 'Tag',
        component: () =>
            import ('../views/Tag.vue')
    },
    {
        path: '/tagg',
        name: 'Tagg',
        component: () =>
            import ('../views/Tag0.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login_0.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../views/Register_0.vue')
    },
    {
        path: '/search',
        name: 'Search',
        component: () =>
            import ('../views/Search.vue')
    },
    {
        path: '/space/:usid',
        name: 'Space',
        component: () =>
            import ('../views/Space.vue')
    },
    {
        path: '/message/:usid',
        name: 'Message',
        component: () =>
            import ('../views/Message.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () =>
            import ('../views/Blog.vue')
    },
    // 收藏夹放在个人空间里
    // {
    //   path: '/favorite/:usid',
    //   name: 'Favorite',
    //   component: () => import('../views/Favorite.vue')
    // },
    {
        path: '/upload',
        name: 'Upload',
        component: () =>
            import ('../views/Upload.vue')
    },
    {
        path: '/video/:vid',
        name: 'Video',
        component: () =>
            import ('../views/Video.vue')
    },
	{
		path: '/videolist',
		name: 'videolist',
		component: () =>
			import ('../views/videolist.vue')
	},
    {
        path: '/searchResult',
        name: 'SearchResult',
        component: () =>
            import ('../views/SearchResult.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router