import PagesProfileIndex from "@/views/pages/pages/profile/Index"
import ProfilePost from "@/views/pages/pages/profile/Posts"
import ProfileGroups from "@/views/pages/pages/profile/Groups"
import ProfileProjects from "@/views/pages/pages/profile/Projects"
import ProfileSubscribers from "@/views/pages/pages/profile/Subscribers"
import ProfileFiles from "@/views/pages/pages/profile/Files"

const profileRoutes = {
    path: 'profile',
    name: 'profile',
    component: PagesProfileIndex,
    children: [
        {
            path: 'posts',
            name: 'pagesProfilePosts',
            component: ProfilePost,
        },
        {
            path: 'groups',
            name: 'pagesProfileGroups',
            component: ProfileGroups,
        },
        {
            path: 'projects',
            name: 'pagesProfileProjects',
            component: ProfileProjects,
        },
        {
            path: 'files',
            name: 'pagesProfileFiles',
            component: ProfileFiles,
        },
        {
            path: 'subscribers',
            name: 'pagesProfileSubscribers',
            component: ProfileSubscribers,
        },
    ]
}

export default profileRoutes
