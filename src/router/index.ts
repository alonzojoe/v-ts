import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import RouterBypass from "@/components/RouterBypass/RouterView.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/layouts/AppLayout.vue'),
        children: [
            {
                path: '/',
                name: 'feed',
                component: () => import('@/views/Feed/Feed.vue')
            },
            {
                path: '/photos',
                name: 'photos',
                component: () => import('@/views/Photos/Photos.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
})

export default router;