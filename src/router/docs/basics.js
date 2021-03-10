import DocsBasicsIndex from "@/views/pages/docs/basics/Index"
import DesignFile from "@/views/pages/docs/basics/DesignFile"
import GettingStarted from "@/views/pages/docs/basics/GettingStarted"

const basicsRoutes = {
    path: 'basics',
    name: 'basics',
    component: DocsBasicsIndex,
    children: [
        {
            path: 'members',
            name: 'docsBasicsGettingStarted',
            component: GettingStarted,
        },
        {
            path: 'design-file',
            name: 'docsBasicsDesignFile',
            component: DesignFile,
        },
    ]
}

export default basicsRoutes
