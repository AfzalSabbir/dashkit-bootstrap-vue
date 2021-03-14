let LayoutMain = () => import("@/views/layouts/Main");

let e404 = () => import("@/views/pages/error/e404");


const otherRoutes = [
    {
        path     : '/',
        name     : 'home',
        component: LayoutMain,
        children : [
            {
                path    : '/',
                redirect: '/dashboard'
            }
        ]
    },
    {
        path     : '/404',
        component: LayoutMain,
        children : [
            {
                path     : '/',
                name     : '404',
                component: e404,
            }
        ]
    },
    {path: '/:catchAll(.*)', redirect: '/404'},
]

export default otherRoutes
