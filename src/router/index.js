import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'Home',
	component: () =>
		import('../views/Home.vue')
},
{
	path: '/tag/:tag_id?',
	name: 'Tag',
	component: () =>
		import('../views/Tag.vue')
},
{
	path: '/login',
	name: 'Login',
	component: () =>
		import('../views/Login.vue')
},
{
	path: '/logout',
	name: 'Logout',
	component: () =>
		import('../views/Logout.vue')
},
{
	path: '/register',
	name: 'Register',
	component: () =>
		import('../views/Register.vue')
},
{
	path: '/search',
	name: 'Search',
	component: () =>
		import('../views/Search.vue')
},
{
	path: '/space/:usid(\\d+)?/:sub?',
	name: 'Space',
	component: () =>
		import('../views/Space.vue')
},
{
	path: '/message/:usid?',
	name: 'Message',
	component: () =>
		import('../views/Message.vue')
},
{
	path: '/blog',
	name: 'Blog',
	component: () =>
		import('../views/Blog.vue')
},
{
	path: '/catspace',
	name: 'CatSpace',
	component: () =>
		import('../views/CatSpace.vue')
},
{
	path: '/upload',
	name: 'Upload',
	component: () =>
		import('../views/Upload.vue')
},
{
	path: '/video/:vid',
	name: 'Video',
	component: () =>
		import('../views/Video.vue')
},
// {
// 	path: '/videolist',
// 	name: 'videolist',
// 	component: () =>
// 		import('../views/VideoList.vue')
// },
{
	path: '/searchResult',
	name: 'SearchResult',
	component: () =>
		import('../views/SearchResult.vue')
},
{
	path: '/cat/:cat_id',
	name: 'Cat',
	component: () =>
		import('../views/Cat.vue')
},
	// {
	// 	path: '/userlist',
	// 	name: 'UserList',
	// 	component: () =>
	// 		import('../views/UserList.vue')
	// },
	// {
	// 	path: '/ulist',
	// 	name: 'UList',
	// 	component: () =>
	// 		import('../views/UList.vue')
	// },
	// {
	// 	path: '/uinfo',
	// 	name: 'UInfo',
	// 	component: () =>
	// 		import('../views/UInfo.vue')
	// },
	// {
	// 	path: '/mine0',
	// 	name: 'Mine0',
	// 	component: () =>
	// 		import('../views/Mine0.vue')
	// },
	// {
	// 	path: '/myblog',
	// 	name: 'MyBlog',
	// 	component: () =>
	// 		import('../views/MyBlog.vue')
	// },
	// {
	// 	path: '/game',
	// 	name: 'Game',
	// 	component: () =>
	// 		import('../views/Game.vue')
	// }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
