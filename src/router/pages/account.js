let PagesAccountIndex    = () => import("@/views/pages/pages/account/Index");
let AccountGeneral       = () => import("@/views/pages/pages/account/General");
let AccountBilling       = () => import("@/views/pages/pages/account/Billing");
let AccountMembers       = () => import("@/views/pages/pages/account/Members");
let AccountSecurity      = () => import("@/views/pages/pages/account/Security");
let AccountNotifications = () => import("@/views/pages/pages/account/Notifications");

const accountRoutes = {
    path     : 'account',
    name     : 'account',
    component: PagesAccountIndex,
    children : [
        {
            path     : 'general',
            name     : 'pagesAccountGeneral',
            component: AccountGeneral,
        },
        {
            path     : 'billing',
            name     : 'pagesAccountBilling',
            component: AccountBilling,
        },
        {
            path     : 'members',
            name     : 'pagesAccountMembers',
            component: AccountMembers,
        },
        {
            path     : 'security',
            name     : 'pagesAccountSecurity',
            component: AccountSecurity,
        },
        {
            path     : 'notifications',
            name     : 'pagesAccountNotifications',
            component: AccountNotifications,
        },
    ]
}

export default accountRoutes
