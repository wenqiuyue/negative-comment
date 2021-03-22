export default [
  //登录
  {
		path: '/',
		name: 'login',
		component: () => import('../../views/login/login.vue'),
  },
    //注册
  {
		path: '/register',
		name: 'register',
		component: () => import('../../views/register'),
  },
  //忘记密码
  {
		path: '/forget-password',
		name: 'forget-password',
		component: () => import('../../views/forget-password'),
	},
  //重置密码
  {
		path: '/password-reset',
		name: 'password-reset',
		component: () => import('../../views/password-reset'),
	},
	//首页
  {
		path: '/home',
		name: 'home',
		component: () => import('../../views/home/home.vue'),
	},
	//分类页面
	{
		path: '/categories',
		name: 'categories',
		component: () => import('../../views/categories/categories.vue'),
	},
	//产品列表
	{
		path: '/product-list',
		name: 'product-list',
		component: () => import('../../views/product-list/product-list.vue'),
	},
	//产品详情
	{
		path: '/product-info',
		name: 'product-info',
		component: () => import('../../views/product-info/product-info.vue'),
	},
	//写评论
	{
		path: '/write-review',
		name: 'write-review',
		component: () => import('../../views/write-review/write-review.vue'),
	},
	//比较
	{
		path: '/compare',
		name: 'compare',
		component: () => import('../../views/compare/compare.vue'),
	},
	//跳转页
	{
		path: '/check-page',
		name: 'check-page',
		component: () => import('../../views/check-page/check-page.vue'),
	},
  //根据条件查询评论
	{
		path: '/comment-condition',
		name: 'comment-condition',
		component: () => import('../../views/comment-condition'),
	},
  //findreviewer 用户信息提交页面
	{
		path: '/find-information',
		name: 'find-information',
		component: () => import('../../views/find-information'),
	},
]