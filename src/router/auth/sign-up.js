let AuthSignUpIndex = () => import("@/views/pages/auth/sign-up/Index");
let SignUpBasic = () => import("@/views/pages/auth/sign-up/Basic");
let SignUpCover = () => import("@/views/pages/auth/sign-up/Cover");
let SignUpIllustration = () => import("@/views/pages/auth/sign-up/Illustration");

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
