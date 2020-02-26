import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/menu/icon-bar',
        name: 'icon-bar',
        component: () => import('../views/menu/icon_bar.vue')
    },
    {
        path: '/menu/menu-icon',
        name: 'icon-bar',
        component: () => import('../views/menu/menu_icon.vue')
    },
    {
        path: '/menu/accordion',
        name: 'accordion',
        component: () => import('../views/menu/accordion.vue')
    },
    {
        path: '/menu/tabs',
        name: 'tabs',
        component: () => import('../views/menu/tabs.vue')
    },
    {
        path: '/menu/side-navigation',
        name: 'side-navigation',
        component: () => import('../views/menu/side_navigation.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
