import {
    createRouter,
    createWebHistory,
} from 'vue-router';

import {nextTick} from 'vue';

import dashboardRoutes from "@/router/dashboard";
import pagesRoutes     from "@/router/pages";
import authRoutes      from "@/router/auth";
import docsRoutes      from "@/router/docs";
import otherRoutes     from "@/router/other";


const routes = [
    dashboardRoutes,
    pagesRoutes,
    authRoutes,
    docsRoutes,
    ...otherRoutes,
];

const router = createRouter({
    history             : createWebHistory(process.env.BASE_URL),
    routes,
    linkExactActiveClass: 'active',
    linkActiveClass     : 'active',
});

router.beforeEach((to, from, next) => {
    if (false) next({name: 'e404'});
    else next();
});

router.afterEach((to, from) => {
    nextTick().then(() => {
        $('[data-toggle="tooltip"]').tooltip();
        $('.dropdown-toggle').dropdown();
    });
});

export default router;
