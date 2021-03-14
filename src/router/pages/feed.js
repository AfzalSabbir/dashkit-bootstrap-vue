let PagesFeedIndex = () => import("@/views/pages/pages/feed/Index");
let FeedPlatform   = () => import("@/views/pages/pages/feed/Platform");
let FeedSocial     = () => import("@/views/pages/pages/feed/Social");

const feedRoutes = {
    path     : 'feed',
    name     : 'feed',
    component: PagesFeedIndex,
    children : [
        {
            path     : 'platform',
            name     : 'pagesFeedPlatform',
            component: FeedPlatform,
        },
        {
            path     : 'social',
            name     : 'pagesFeedSocial',
            component: FeedSocial,
        },
    ]
}

export default feedRoutes
