import {Router} from "express"
import {usersController} from "../controllers/users.controller.js";
const router = Router()

router.post('/', usersController.create)
router.get('/', usersController.findAll)
router.get('/:id', usersController.findOne)
router.delete('/:id', usersController.delete)

export {router}