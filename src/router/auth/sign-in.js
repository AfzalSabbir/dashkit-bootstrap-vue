import AuthSignInIndex from "@/views/pages/auth/sign-in/Index"
import SignInBasic from "@/views/pages/auth/sign-in/Basic"
import SignInCover from "@/views/pages/auth/sign-in/Cover"
import SignInIllustration from "@/views/pages/auth/sign-in/Illustration"

const signInRoutes = {
    path: 'sign-in',
    name: 'sign-in',
    component: AuthSignInIndex,
    children: [
        {
            path: 'basic',
            name: 'authSignInBasic',
            component: SignInBasic,
        },
        {
            path: 'cover',
            name: 'authSignInCover',
            component: SignInCover,
        },
        {
            path: 'illustration',
            name: 'authSignInIllustration',
            component: SignInIllustration,
        },
    ]
}

export default signInRoutes
