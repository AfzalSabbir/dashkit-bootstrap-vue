let LayoutMain = () => import("@/views/layouts/Main");

let DashboardIndex             = () => import("@/views/pages/Index");
let DashboardProjectManagement = () => import("@/views/pages/DashboardProjectManagement");
let DashboardECommerce         = () => import("@/views/pages/DashboardECommerce");


const dashboardRoutes = {
    path     : '/dashboard',
    name     : 'mainLayout',
    component: LayoutMain,
    children : [
        {
            path     : '',
            name     : 'dashboard',
            component: DashboardIndex,
        },
        {
            path     : 'project-management',
            name     : 'dashboardProjectManagement',
            component: DashboardProjectManagement,
        },
        {
            path     : 'ecommerce',
            name     : 'dashboardECommerce',
            component: DashboardECommerce,
        },
    ]
}

export default dashboardRoutes
