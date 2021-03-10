import PagesTeamIndex from "@/views/pages/pages/team/Index"
import TeamOverview from "@/views/pages/pages/team/Overview"
import TeamProjects from "@/views/pages/pages/team/Projects"
import TeamMembers from "@/views/pages/pages/team/Members"
import TeamNewTeam from "@/views/pages/pages/team/NewTeam"

const teamRoutes = {
        path: 'team',
        name: 'team',
        component: PagesTeamIndex,
        children: [
            {
                path: 'overview',
                name: 'pagesTeamOverview',
                component: TeamOverview,
            },
            {
                path: 'files',
                name: 'pagesTeamProjects',
                component: TeamProjects,
            },
            {
                path: 'reports',
                name: 'pagesTeamMembers',
                component: TeamMembers,
            },
            {
                path: 'new',
                name: 'pagesTeamNewTeam',
                component: TeamNewTeam,
            },
        ]
    }

export default teamRoutes
