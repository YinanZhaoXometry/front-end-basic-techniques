export default [
    {
        path: '/image/slide-show',
        name: 'image/slide-show',
        component: () => import('../views/image/slide-show.vue')
    },
    {
        path: '/image/slide-show-gallery',
        name: 'image/slide-show-gallery',
        component: () => import('../views/image/slide-show-gallery.vue')
    },
    {
        path: '/image/modal-image',
        name: 'image/modal-image',
        component: () => import('../views/image/modal-image.vue')
    },
    {
        path: '/image/responsive-image-grid',
        name: 'image/responsive-image-grid',
        component: () => import('../views/image/responsive-image-grid.vue')
    },
    {
        path: '/image/hero-shot',
        name: 'image/hero-shot',
        component: () => import('../views/image/hero-shot.vue')
    },
    {
        path: '/image/responsive-image',
        name: 'image/responsive-image',
        component: () => import('../views/image/responsive-image.vue')
    },
    {
        path: '/image/sticky-image',
        name: 'image/sticky-image',
        component: () => import('../views/image/sticky-image.vue')
    },
    {
        path: '/image/flip-image',
        name: 'image/flip-image',
        component: () => import('../views/image/flip-image.vue')
    },
    {
        path: '/image/shake-image',
        name: 'image/shake-image',
        component: () => import('../views/image/shake-image.vue')
    },
    {
        path: '/image/image-zoom',
        name: 'image/image-zoom',
        component: () => import('../views/image/image-zoom.vue')
    },
    {
        path: '/image/image-magnifier-glass',
        name: 'image/image-magnifier-glass',
        component: () => import('../views/image/image-magnifier-glass.vue')
    },
    {
        path: '/image/image-comparison-slider',
        name: 'image/image-comparison-slider',
        component: () => import('../views/image/image-comparison-slider.vue')
    },
]