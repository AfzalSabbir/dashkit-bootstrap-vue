let AuthErrorIndex = () => import("@/views/pages/auth/error/Index")
let ErrorBasic = () => import("@/views/pages/auth/error/Basic")
let ErrorIllustration = () => import("@/views/pages/auth/error/Illustration")

const errorRoutes = {
    path: 'error',
    name: 'error',
    component: AuthErrorIndex,
    children: [
        {
            path: 'billing',
            name: 'authErrorBasic',
            component: ErrorBasic,
        },
        {
            path: 'members',
            name: 'authErrorIllustration',
            component: ErrorIllustration,
        },
    ]
}

export default errorRoutes
