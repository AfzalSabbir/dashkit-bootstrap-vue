import PagesCRMIndex from "@/views/pages/pages/crm/Index"
import CRMContacts from "@/views/pages/pages/crm/Contacts"
import CRMCompanies from "@/views/pages/pages/crm/Companies"
import CRMDeals from "@/views/pages/pages/crm/Deals"

const crmRoutes = {
    path: 'crm',
    name: 'crm',
    component: PagesCRMIndex,
    children: [

        {
            path: 'contacts',
            name: 'pagesCRMContacts',
            component: CRMContacts,
        },
        {
            path: 'companies',
            name: 'pagesCRMCompanies',
            component: CRMCompanies,
        },
        {
            path: 'deals',
            name: 'pagesCRMDeals',
            component: CRMDeals,
        },
    ]
}

export default crmRoutes
