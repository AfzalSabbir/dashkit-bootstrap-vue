import AuthSignUpIndex from "@/views/pages/auth/sign-up/Index"
import SignUpBasic from "@/views/pages/auth/sign-up/Basic"
import SignUpCover from "@/views/pages/auth/sign-up/Cover"
import SignUpIllustration from "@/views/pages/auth/sign-up/Illustration"

const signInRoutes = {
    path: 'sign-up',
    name: 'sign-up',
    component: AuthSignUpIndex,
    children: [
        {
            path: 'basic',
            name: 'authSignUpBasic',
            component: SignUpBasic,
        },
        {
            path: 'cover',
            name: 'authSignUpCover',
            component: SignUpCover,
        },
        {
            path: 'illustration',
            name: 'authSignUpIllustration',
            component: SignUpIllustration,
        },
    ]
}

export default signInRoutes
