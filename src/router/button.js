export default [
    {
        path: '/button/button',
        name: 'button/button',
        component: () => import('../views/button/button.vue')
    },
    {
        path: '/button/animated-button',
        name: 'button/animated-button',
        component: () => import('../views/button/animated-button.vue')
    },
    {
        path: '/button/scroll-top-button',
        name: 'button/scroll-top-button',
        component: () => import('../views/button/scroll-top-button.vue')
    },
]