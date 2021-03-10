import PagesAccountIndex from "@/views/pages/pages/account/Index"
import AccountGeneral from "@/views/pages/pages/account/General"
import AccountBilling from "@/views/pages/pages/account/Billing"
import AccountMembers from "@/views/pages/pages/account/Members"

const signInRoutes = {
    path: 'sign-in',
    name: 'sign-in',
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
    ]
}

export default signInRoutes
