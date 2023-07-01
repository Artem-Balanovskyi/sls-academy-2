import {Router} from "express"
import {userController} from "../controllers/user.controller.js";
const router = Router()

router.post('/', userController.createUser)
router.get('/', userController.findAllUsers)
router.get('/:id', userController.findUserById)
router.delete('/:id', userController.deleteUserById)

export {router}