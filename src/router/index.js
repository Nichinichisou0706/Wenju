import { createRouter, createWebHashHistory } from 'vue-router'
import message from 'ant-design-vue/es/message'
import store from '@/store'

// 用户角色定义为未登录、游客、管理员
// 权限管理方式为白名单，在路由中pass字段定义通行角色，未定义则默认全部通行
const userRole = {
  UNREGISTERED: 'unregistered',
  CUSTOMER: 'customer',
  ADMIN: 'admin'
}

const routes = [
  // 主功能区
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/pinyin',
    name: 'Pinyin',
    component: () => import('@/views/Pinyin.vue')
  },
  {
    path: '/dictionary',
    name: 'Dictionary',
    component: () => import('@/views/Dictionary.vue')
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('@/views/Articles.vue')
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import('@/views/Tools.vue')
  },
  {
    path: '/wordlist',
    name: 'WordList',
    component: () => import('@/views/WordList.vue')
  },
  {
    path: '/rewards',
    name: 'Rewards',
    component: () => import('@/views/Rewards.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  base: '/',
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from) => {
  // 默认放行
  if (!to.meta.pass) return true
  // 白名单放行
  if (to.meta.pass.includes(store.getters.userInfo.role)) return true
  else if (store.getters.userInfo.role === userRole.UNREGISTERED) {
    // 未登录跳转登录
    message.warn('请先登录！')
    return '/home'
  } else {
    // 权限不足跳转主页
    message.warn('权限不足！')
    return '/home'
  }
})

export default router
