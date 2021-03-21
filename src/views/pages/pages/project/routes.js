let PagesProjectIndex = () => import("@/views/pages/pages/project/Index");

let ProjectReports  = () => import("@/views/pages/pages/project/Reports");
let ProjectOverview = () => import("@/views/pages/pages/project/Overview");
let ProjectNew      = () => import("@/views/pages/pages/project/NewProject");
let ProjectFiles    = () => import("@/views/pages/pages/project/Files");


const projectRoutes = {
    path     : 'project',
    name     : 'project',
    component: PagesProjectIndex,
    children : [
        {
            path     : 'overview',
            name     : 'pagesProjectOverview',
            component: ProjectOverview,
        },
        {
            path     : 'files',
            name     : 'pagesProjectFiles',
            component: ProjectFiles,
        },
        {
            path     : 'reports',
            name     : 'pagesProjectReports',
            component: ProjectReports,
        },
        {
            path     : 'new',
            name     : 'pagesProjectNew',
            component: ProjectNew,
        },
    ]
}

export default projectRoutes
