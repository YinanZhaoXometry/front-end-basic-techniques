import Vue from 'vue'
import VueRouter from 'vue-router'
import buttonRoutes from './button'
import imageRoutes from './image'
import formRoutes from './form'
import menuRoutes from './menu'
import moreRoutes from './more'
import elementRoutes from './element'

Vue.use(VueRouter)

const routes = [
    ...buttonRoutes,
    ...imageRoutes,
    ...formRoutes,
    ...menuRoutes,
    ...moreRoutes,
    ...elementRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
