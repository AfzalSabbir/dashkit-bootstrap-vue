import AuthPasswordResetIndex from "@/views/pages/auth/password-reset/Index"
import PasswordResetBasic from "@/views/pages/auth/password-reset/Basic"
import PasswordResetCover from "@/views/pages/auth/password-reset/Cover"
import PasswordResetIllustration from "@/views/pages/auth/password-reset/Illustration"

const signInRoutes = {
    path: 'password-reset',
    name: 'password-reset',
    component: AuthPasswordResetIndex,
    children: [
        {
            path: 'basic',
            name: 'authPasswordResetBasic',
            component: PasswordResetBasic,
        },
        {
            path: 'cover',
            name: 'authPasswordResetCover',
            component: PasswordResetCover,
        },
        {
            path: 'illustration',
            name: 'authPasswordResetIllustration',
            component: PasswordResetIllustration,
        },
    ]
}

export default signInRoutes
