import LayoutMain from "@/views/layouts/Main";

import e404 from "@/views/pages/error/e404";


const otherRoutes = [
    {
        path: '/',
        name: 'home',
        component: LayoutMain,
        children: [
            {
                path: '/',
                redirect: '/dashboard'
            }
        ]
    },
    {
        path: '/404',
        component: LayoutMain,
        children: [
            {
                path: '/',
                name: '404',
                component: e404,
            }
        ]
    },
    {path: '/:catchAll(.*)', redirect: '/404'},
]

export default otherRoutes
