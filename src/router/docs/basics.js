let DocsBasicsIndex = () => import("@/views/pages/docs/basics/Index");
let DesignFile      = () => import("@/views/pages/docs/basics/DesignFile");
let GettingStarted  = () => import("@/views/pages/docs/basics/GettingStarted");

const basicsRoutes = {
    path     : 'basics',
    name     : 'basics',
    component: DocsBasicsIndex,
    children : [
        {
            path     : 'getting-started',
            name     : 'docsBasicsGettingStarted',
            component: GettingStarted,
        },
        {
            path     : 'design-file',
            name     : 'docsBasicsDesignFile',
            component: DesignFile,
        },
    ]
}

export default basicsRoutes
