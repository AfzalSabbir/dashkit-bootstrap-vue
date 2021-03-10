import PagesFeedIndex from "@/views/pages/pages/feed/Index"
import FeedPlatform from "@/views/pages/pages/feed/Platform"
import FeedSocial from "@/views/pages/pages/feed/Social"

const feedRoutes = {
            path: 'feed',
            name: 'feed',
            component: PagesFeedIndex,
            children: [
                {
                    path: 'platform',
                    name: 'pagesFeedPlatform',
                    component: FeedPlatform,
                },
                {
                    path: 'social',
                    name: 'pagesFeedSocial',
                    component: FeedSocial,
                },
            ]
        }

export default feedRoutes
