import LayoutMain from "@/views/layouts/Main"

import basicsRoutes from "./basics";

import PagesInvoice from "@/views/pages/pages/Invoice"
import PagesKanban from "@/views/pages/pages/Kanban"


const docsRoutes = {
    path: '/docs',
    name: 'docs',
    component: LayoutMain,
    children: [
        basicsRoutes,

        {
            path: 'invoice',
            name: 'pagesInvoice',
            component: PagesInvoice,
        },
        {
            path: 'kanban',
            name: 'pagesKanban',
            component: PagesKanban,
        },
    ]
}

export default docsRoutes
