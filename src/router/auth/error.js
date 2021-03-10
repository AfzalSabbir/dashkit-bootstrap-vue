import AuthErrorIndex from "@/views/pages/auth/error/Index"
import ErrorBasic from "@/views/pages/auth/error/Basic"
import ErrorIllustration from "@/views/pages/auth/error/Illustration"

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
