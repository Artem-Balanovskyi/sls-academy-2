import {router as userRoutes} from "./user.routes.js"
import {router as signInRoutes} from "./signIn.routes.js"
import {router as signUpRoutes} from "./signUp.routes.js"

const initRoutes = (app) => {
	app.use("/me", userRoutes)
	app.use("/auth/sign-in", signInRoutes)
	app.use("/auth/sign-up", signUpRoutes)
}

export {initRoutes}