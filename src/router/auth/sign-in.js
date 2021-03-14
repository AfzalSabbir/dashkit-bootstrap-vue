let AuthSignInIndex = () => import("@/views/pages/auth/sign-in/Index");
let SignInBasic = () => import("@/views/pages/auth/sign-in/Basic");
let SignInCover = () => import("@/views/pages/auth/sign-in/Cover");
let SignInIllustration = () => import("@/views/pages/auth/sign-in/Illustration");

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
