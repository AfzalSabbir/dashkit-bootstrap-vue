import PagesProjectIndex from "@/views/pages/pages/project/Index"
import ProjectReports from "@/views/pages/pages/project/Reports"
import ProjectOverview from "@/views/pages/pages/project/Overview"
import ProjectNew from "@/views/pages/pages/project/NewProject"
import ProjectFiles from "@/views/pages/pages/project/Files"


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
