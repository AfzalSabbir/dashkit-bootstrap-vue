let PagesTeamIndex = () => import("@/views/pages/pages/team/Index");

let TeamOverview = () => import("@/views/pages/pages/team/Overview");
let TeamProjects = () => import("@/views/pages/pages/team/Projects");
let TeamMembers  = () => import("@/views/pages/pages/team/Members");
let TeamNew      = () => import("@/views/pages/pages/team/NewTeam");

const teamRoutes = {
    path     : 'team',
    name     : 'team',
    component: PagesTeamIndex, //Layout
    children : [
        {
            path     : 'overview',
            name     : 'pagesTeamOverview',
            component: TeamOverview,
        },
        {
            path     : 'files',
            name     : 'pagesTeamProjects',
            component: TeamProjects,
        },
        {
            path     : 'reports',
            name     : 'pagesTeamMembers',
            component: TeamMembers,
        },
        {
            path     : 'new',
            name     : 'pagesTeamNewTeam',
            component: TeamNew,
        },
    ]
}

export default teamRoutes
