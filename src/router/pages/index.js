import LayoutMain from "@/views/layouts/Main"

import accountRoutes from "@/router/pages/account";
import feedRoutes    from "@/router/pages/feed";
import profileRoutes from "@/views/pages/pages/profile/routes";
import projectRoutes from "@/views/pages/pages/project/routes";
import teamRoutes    from "@/views/pages/pages/team/router";
import crmRoutes     from "@/router/pages/crm";

let PagesInvoice = () => import("@/views/pages/pages/Invoice");
let PagesKanban  = () => import("@/views/pages/pages/Kanban");
let PagesOrders  = () => import("@/views/pages/pages/Orders");
let PagesPricing = () => import("@/views/pages/pages/Pricing");
let PagesWidgets = () => import("@/views/pages/pages/Widgets");
let PagesWizard  = () => import("@/views/pages/pages/Wizard");


const pagesRoutes = {
    path     : '/pages',
    name     : 'pages',
    component: LayoutMain,
    children : [
        accountRoutes,
        feedRoutes,
        profileRoutes,
        projectRoutes,
        teamRoutes,
        crmRoutes,

        {
            path     : 'invoice',
            name     : 'pagesInvoice',
            component: PagesInvoice,
        },
        {
            path     : 'kanban',
            name     : 'pagesKanban',
            component: PagesKanban,
        },
        {
            path     : 'orders',
            name     : 'pagesOrders',
            component: PagesOrders,
        },
        {
            path     : 'pricing',
            name     : 'pagesPricing',
            component: PagesPricing,
        },
        {
            path     : 'widgets',
            name     : 'pagesWidgets',
            component: PagesWidgets,
        },
        {
            path     : 'wizard',
            name     : 'pagesWizard',
            component: PagesWizard,
        },
    ]
}

export default pagesRoutes
