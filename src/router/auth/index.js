import LayoutMain from "@/views/layouts/Main"

import errorRoutes         from "./error"
import passwordResetRoutes from "./password-reset"
import signInRoutes        from "./sign-in"
import signUpRoutes        from "./sign-up"


const authRoutes = {
    path     : '/auth',
    name     : 'auth',
    component: LayoutMain,
    children : [
        errorRoutes,
        passwordResetRoutes,
        signInRoutes,
        signUpRoutes,
    ]
}

export default authRoutes
