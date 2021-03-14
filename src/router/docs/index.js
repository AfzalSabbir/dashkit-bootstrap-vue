import LayoutMain from "@/views/layouts/Main"

import basicsRoutes from "./basics";

import ChangeLogs from "@/views/pages/docs/ChangeLogs"
import Components from "@/views/pages/docs/Components"


const docsRoutes = {
    path     : '/docs',
    name     : 'docs',
    component: LayoutMain,
    children : [
        basicsRoutes,

        {
            path     : 'components',
            name     : 'docsComponents',
            component: Components,
        },
        {
            path     : 'change-logs',
            name     : 'docsChangeLogs',
            component: ChangeLogs,
        },
    ]
}

export default docsRoutes
