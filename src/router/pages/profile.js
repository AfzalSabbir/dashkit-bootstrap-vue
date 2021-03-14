let PagesProfileIndex  = () => import("@/views/pages/pages/profile/Index");
let ProfilePost        = () => import("@/views/pages/pages/profile/Posts");
let ProfileGroups      = () => import("@/views/pages/pages/profile/Groups");
let ProfileProjects    = () => import("@/views/pages/pages/profile/Projects");
let ProfileSubscribers = () => import("@/views/pages/pages/profile/Subscribers");
let ProfileFiles       = () => import("@/views/pages/pages/profile/Files");

const profileRoutes = {
    path     : 'profile',
    name     : 'profile',
    component: PagesProfileIndex,
    children : [
        {
            path     : 'posts',
            name     : 'pagesProfilePosts',
            component: ProfilePost,
        },
        {
            path     : 'groups',
            name     : 'pagesProfileGroups',
            component: ProfileGroups,
        },
        {
            path     : 'projects',
            name     : 'pagesProfileProjects',
            component: ProfileProjects,
        },
        {
            path     : 'files',
            name     : 'pagesProfileFiles',
            component: ProfileFiles,
        },
        {
            path     : 'subscribers',
            name     : 'pagesProfileSubscribers',
            component: ProfileSubscribers,
        },
    ]
}

export default profileRoutes
