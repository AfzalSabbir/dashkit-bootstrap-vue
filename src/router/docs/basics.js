import PagesAccountIndex from "@/views/pages/pages/account/Index"
import AccountBilling from "@/views/pages/pages/account/Billing"
import AccountMembers from "@/views/pages/pages/account/Members"

const basicsRoutes = {
    path: 'basics',
    name: 'basics',
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

export default basicsRoutes
