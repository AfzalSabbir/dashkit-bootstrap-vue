let PagesCRMIndex = () => import("@/views/pages/pages/crm/Index");
let CRMContacts   = () => import("@/views/pages/pages/crm/Contacts");
let CRMCompanies  = () => import("@/views/pages/pages/crm/Companies");
let CRMDeals      = () => import("@/views/pages/pages/crm/Deals");

const crmRoutes = {
    path     : 'crm',
    name     : 'crm',
    component: PagesCRMIndex,
    children : [

        {
            path     : 'contacts',
            name     : 'pagesCRMContacts',
            component: CRMContacts,
        },
        {
            path     : 'companies',
            name     : 'pagesCRMCompanies',
            component: CRMCompanies,
        },
        {
            path     : 'deals',
            name     : 'pagesCRMDeals',
            component: CRMDeals,
        },
    ]
}

export default crmRoutes
