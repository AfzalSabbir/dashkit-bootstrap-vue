import LayoutMain from "@/views/layouts/Main"

import accountRoutes from "./account"
import feedRoutes from "./feed"
import profileRoutes from "./profile"
import projectRoutes from "./project"
import teamRoutes from "./team"
import crmRoutes from "./crm"

import PagesInvoice from "@/views/pages/pages/Invoice"
import PagesKanban from "@/views/pages/pages/Kanban"
import PagesOrders from "@/views/pages/pages/Orders"
import PagesPricing from "@/views/pages/pages/Pricing"
import PagesWidgets from "@/views/pages/pages/Widgets"
import PagesWizard from "@/views/pages/pages/Wizard"


const pagesRoutes = [
    {
        path: '/pages',
        name: 'pages',
        component: LayoutMain,
        children: [
            accountRoutes,
            feedRoutes,
            profileRoutes,
            projectRoutes,
            teamRoutes,
            crmRoutes,
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
            {
                path: 'orders',
                name: 'pagesOrders',
                component: PagesOrders,
            },
            {
                path: 'pricing',
                name: 'pagesPricing',
                component: PagesPricing,
            },
            {
                path: 'widgets',
                name: 'pagesWidgets',
                component: PagesWidgets,
            },
            {
                path: 'wizard',
                name: 'pagesWizard',
                component: PagesWizard,
            },
        ]
    }
]

export default pagesRoutes
