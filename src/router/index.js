import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/goods',
    redirect: "/goods/index"
  },
  {
    path: '/order',
    redirect: "/order/index"
  },
  {
    path: '/marketing',
    redirect: "/marketing/index"
  },
  {
    path: '/member',
    redirect: "/member/index"
  },
  {
    path: '/system',
    redirect: "/system/index"
  },
  {
    path: '/setting',
    redirect: "/setting/index"
  },
  {
    path: '',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/index',
        name: 'Home',
        component: Home,
        meta:{
          parentPath:'/index'
        }
      },
      {
        path: '/goods/index',
        name: 'Goods',
        component: () => import('../views/Goods.vue'),
        meta:{
          parentPath:'/goods'
        }
      },
      {
        path: '/order/index',
        name: 'Order',
        component: () => import('../views/Order.vue'),
        meta:{
          parentPath:'/order'
        }
      },
      {
        path: '/marketing/index',
        name: 'Marketing',
        component: () => import('../views/Marketing.vue'),
        meta:{
          parentPath:'/marketing'
        }
      },
      {
        path: '/member/index',
        name: 'Member',
        component: () => import('../views/Member.vue'),
        meta:{
          parentPath:'/member'
        }
      },
      {
        path: '/system/index',
        name: 'System',
        component: () => import('../views/System.vue'),
        meta:{
          parentPath:'/system'
        }
      },
      {
        path: '/setting/index',
        name: 'Setting',
        component: () => import('../views/Settings.vue'),
        meta:{
          parentPath:'/setting'
        }
      },
      {
        path: '/goods/opinion/consult',
        name: 'consult',
        component: () => import('../views/goods/IndexHome.vue'),
        meta: {
          title: '商品咨询',
          parentPath: '/goods'
        }
      },
      {
        path: '/order/index',
        name: 'IndexHome',
        component: () => import('../views/goods/IndexHome.vue')
      },
      {
        path: '/marketing/index',
        name: 'IndexHome',
        component: () => import('../views/goods/IndexHome.vue')
      },
      {
        path: '/member/index',
        name: 'IndexHome',
        component: () => import('../views/goods/IndexHome.vue')
      },
      {
        path: '/system/index',
        name: 'IndexHome',
        component: () => import('../views/goods/IndexHome.vue')
      },
    ]
  },
  { 
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
