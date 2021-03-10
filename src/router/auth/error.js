import PagesAccountIndex from "@/views/pages/pages/account/Index"
import AccountBilling from "@/views/pages/pages/account/Billing"
import AccountMembers from "@/views/pages/pages/account/Members"

const errorRoutes = {
    path: 'error',
    name: 'error',
    component: PagesAccountIndex,
    children: [
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
    ]
}

export default errorRoutes
