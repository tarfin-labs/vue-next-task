import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Event from '../views/Event.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/event/:id',
        name: 'event',
        component: Event,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;