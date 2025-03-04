import { createRouter, createWebHashHistory } from 'vue-router';

const constantRoutes = [
    { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true },
    {
        path: '/',
        component: () => import('@/layout//Layout.vue'),
        children: [
            {
                path: '/main',
                name: '메인페이지',
                component: () => import('@/views/index.vue'),
            },
            {
                path: '/career',
                name: 'career',
                component: () => import('@/views/career'),
            },
            {
                path: '/portfolio',
                name: 'portfolio',
                component: () => import('@/views/portfolio'),
            },
            {
                path: '/contact',
                name: 'contact',
                component: () => import('@/views/contact'),
            },
        ],
        redirect: '/main',
    },
    {
        path: '/404',
        component: () => import('@/views/error-page/Error.vue'),
    },
    {
        path: '/401',
        component: () => import('@/views/error-page/Error.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
});

export default router;
