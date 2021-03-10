import PagesAccountIndex from "@/views/pages/pages/account/Index"
import AccountGeneral from "@/views/pages/pages/account/General"
import AccountBilling from "@/views/pages/pages/account/Billing"
import AccountMembers from "@/views/pages/pages/account/Members"
import AccountSecurity from "@/views/pages/pages/account/Security"
import AccountNotifications from "@/views/pages/pages/account/Notifications"

const accountRoutes = {
    path: 'account',
    name: 'account',
    component: PagesAccountIndex,
    children: [
        {
            path: 'general',
            name: 'pagesAccountGeneral',
            component: AccountGeneral,
        },
        {
            path: 'billing',
            name: 'pagesAccountBilling',
            component: AccountBilling,
        },
        {
            path: 'members',
            name: 'pagesAccountMembers',
            component: AccountMembers,
        },
        {
            path: 'security',
            name: 'pagesAccountSecurity',
            component: AccountSecurity,
        },
        {
            path: 'notifications',
            name: 'pagesAccountNotifications',
            component: AccountNotifications,
        },
    ]
}

export default accountRoutes
