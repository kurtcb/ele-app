import Vue from 'vue';
import Router from 'vue-router';
// import { component } from 'vue/types/umd';
// import { component } from 'vue/types/umd';

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  // linkActiveClass: 'active',
  // () => import('../views/Login.vue')
  routes: [
    {
      path: '/',
      // name: 'index',
      component: () => import('../views/index.vue'),
      children: [
        {
          path: '',
          redirect: '/home',

        },
        {
          path: '/home',
          component: () => import('../views/Home')
        },
        {
          path: '/order',
          component: () => import('../views/Order')

        },
        {
          path: '/me',
          component: () => import('../views/Me'),

        },
        {
          path: '/address',
          component: () => import('../views/Address'),

        },
        {
          path: '/city',
          component: () => import('../views/City')
        },
        {
          path: '/searchShop',
          component: () => import('../views/SearchShop')
        },
        {
          path: '/shop',
          redirect: '/goods',
          component: () => import('../views/Shops/Shop'),

          children: [
            {
              path: '/goods',
              // redirect:'/goods',
              component: () => import('../views/Shops/Goods'),
            },
            {
              path: '/comments',
              component: () => import('../views/Shops/Comments'),
            },
            {
              path: '/sellers',
              component: () => import('../views/Shops/Sellers'),
            },
          ]
        }
      ]
    },
    {
      path:'/settlement',
      component:()=>import('../views/Orders/Settlement')
    },
    {
      path: '/addAddress',
      name:'addAddress',
      component: () => import('../views/Orders/AddAddress')
    },
    {
      path: '/myAddress',
      component: () => import('../views/Orders/MyAddress')
    },
    {
      path: '/remark',
      component: () => import('../views/Orders/Remark')
    },
    {
      path: '/pay',
      component: () => import('../views/Orders/Pay')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
  ]
});
// 路由守卫
// 别忘了在app设置路由出口
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.ele_login ? true : false;
  if (to.path == '/login') {
    next();
  } else {
    // 是否在登录状态下
    isLogin ? next() : next('/login');
  }
});

export default router;
