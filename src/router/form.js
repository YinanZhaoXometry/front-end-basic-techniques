export default [
    {
        path: '/form/hide-number-arrows',
        name: 'form/hide-number-arrows',
        component: () => import('../views/form/hide-number-arrows.vue')
    },
    {
        path: '/form/copy-to-clipboard',
        name: 'form/copy-to-clipboard',
        component: () => import('../views/form/copy-to-clipboard.vue')
    },
    {
        path: '/form/animated-searchbar',
        name: 'form/animated-searchbar',
        component: () => import('../views/form/animated-searchbar.vue')
    },
    {
        path: '/form/custom-checkbox',
        name: 'form/custom-checkbox',
        component: () => import('../views/form/custom-checkbox.vue')
    },
    {
        path: '/form/custom-radio',
        name: 'form/custom-radio',
        component: () => import('../views/form/custom-radio.vue')
    },
    {
        path: '/form/custom-select',
        name: 'form/custom-select',
        component: () => import('../views/form/custom-select.vue')
    },
    {
        path: '/form/toggle-switch',
        name: 'form/toggle-switch',
        component: () => import('../views/form/toggle-switch.vue')
    },
]