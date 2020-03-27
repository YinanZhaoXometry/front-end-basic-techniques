export default [
    {
        path: '/menu/icon-bar',
        name: 'icon-bar',
        component: () => import('../views/menu/icon-bar.vue')
    },
    {
        path: '/menu/menu-icon',
        name: 'icon-bar',
        component: () => import('../views/menu/menu-icon.vue')
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
        component: () => import('../views/menu/side-navigation.vue')
    },
    {
        path: '/menu/hover-side-button',
        name: 'side-navigation',
        component: () => import('../views/menu/hover-side-button.vue')
    },
    {
        path: '/menu/scroll-slidedown-nav',
        name: 'menu/scroll-slidedown-nav',
        component: () => import('../views/menu/scroll-slidedown-nav.vue')
    },
    {
        path: '/menu/scroll-shrink-nav',
        name: 'menu/scroll-shrink-nav',
        component: () => import('../views/menu/scroll-shrink-nav.vue')
    },
    {
        path: '/menu/scroll-sticky-nav',
        name: 'menu/scroll-sticky-nav',
        component: () => import('../views/menu/scroll-sticky-nav.vue')
    },
    {
        path: '/menu/hover-drop-down',
        name: 'menu/hover-drop-down',
        component: () => import('../views/menu/hover-drop-down.vue')
    },
]