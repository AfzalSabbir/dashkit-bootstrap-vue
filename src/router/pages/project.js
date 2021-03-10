import {createRouter, createWebHistory} from 'vue-router'

import LayoutMain from "@/views/layouts/Main"

import DashboardIndex from "@/views/pages/Index"
import DashboardECommerce from "@/views/pages/DashboardECommerce"
import DashboardProjectManagement from "@/views/pages/DashboardProjectManagement"

import PagesProfileIndex from "@/views/pages/pages/profile/Index"
import ProfilePost from "@/views/pages/pages/profile/Posts"
import ProfileGroups from "@/views/pages/pages/profile/Groups"
import ProfileProjects from "@/views/pages/pages/profile/Projects"
import ProfileSubscribers from "@/views/pages/pages/profile/Subscribers"
import ProfileFiles from "@/views/pages/pages/profile/Files"

import PagesProjectIndex from "@/views/pages/pages/project/Index"
import ProjectReports from "@/views/pages/pages/project/Reports"
import ProjectOverview from "@/views/pages/pages/project/Overview"
import ProjectNew from "@/views/pages/pages/project/NewProject"
import ProjectFiles from "@/views/pages/pages/project/Files"

import PagesTeamIndex from "@/views/pages/pages/team/Index"
import TeamOverview from "@/views/pages/pages/team/Overview"
import TeamProjects from "@/views/pages/pages/team/Projects"
import TeamMembers from "@/views/pages/pages/team/Members"
import TeamNewTeam from "@/views/pages/pages/team/NewTeam"

import PagesFeedIndex from "@/views/pages/pages/feed/Index"
import FeedPlatform from "@/views/pages/pages/feed/Platform"
import FeedSocial from "@/views/pages/pages/feed/Social"

import PagesAccountIndex from "@/views/pages/pages/account/Index"
import AccountGeneral from "@/views/pages/pages/account/General"
import AccountBilling from "@/views/pages/pages/account/Billing"
import AccountMembers from "@/views/pages/pages/account/Members"
import AccountSecurity from "@/views/pages/pages/account/Security"
import AccountNotifications from "@/views/pages/pages/account/Notifications"

import PagesCRMIndex from "@/views/pages/pages/crm/Index"
import CRMContacts from "@/views/pages/pages/crm/Contacts"
import CRMCompanies from "@/views/pages/pages/crm/Companies"
import CRMDeals from "@/views/pages/pages/crm/Deals"

import PagesInvoice from "@/views/pages/pages/Invoice"
import PagesKanban from "@/views/pages/pages/Kanban"
import PagesOrders from "@/views/pages/pages/Orders"
import PagesPricing from "@/views/pages/pages/Pricing"
import PagesWidgets from "@/views/pages/pages/Widgets"
import PagesWizard from "@/views/pages/pages/Wizard"

import e404 from "@/views/pages/error/e404"

const projectRoutes = {
    path: 'project',
    name: 'project',
    component: PagesProjectIndex,
    children: [
        {
            path: 'overview',
            name: 'pagesProjectOverview',
            component: ProjectOverview,
        },
        {
            path: 'files',
            name: 'pagesProjectFiles',
            component: ProjectFiles,
        },
        {
            path: 'reports',
            name: 'pagesProjectReports',
            component: ProjectReports,
        },
        {
            path: 'new',
            name: 'pagesProjectNew',
            component: ProjectNew,
        },
    ]
}

export default projectRoutes
