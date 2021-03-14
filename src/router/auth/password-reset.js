let AuthPasswordResetIndex = () => import("@/views/pages/auth/password-reset/Index");
let PasswordResetBasic = () => import("@/views/pages/auth/password-reset/Basic");
let PasswordResetCover = () => import("@/views/pages/auth/password-reset/Cover");
let PasswordResetIllustration = () => import("@/views/pages/auth/password-reset/Illustration");

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
