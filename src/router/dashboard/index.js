import LayoutMain from "@/views/layouts/Main";

import DashboardIndex from "@/views/pages/Index";
import DashboardProjectManagement from "@/views/pages/DashboardProjectManagement";
import DashboardECommerce from "@/views/pages/DashboardECommerce";


const dashboardRoutes = {
    path: '/dashboard',
    name: 'mainLayout',
    component: LayoutMain,
    children: [
        {
            path: '',
            name: 'dashboard',
            component: DashboardIndex,
        },
        {
            path: 'project-management',
            name: 'dashboardProjectManagement',
            component: DashboardProjectManagement,
        },
        {
            path: 'ecommerce',
            name: 'dashboardECommerce',
            component: DashboardECommerce,
        },
    ]
}

export default dashboardRoutes
