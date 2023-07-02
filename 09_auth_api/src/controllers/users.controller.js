import {usersService} from "../services/users.service.js";

class UsersController {
	async create(req, res) {
		try {
			const {email, password} = req.body
			const newUser = await usersService.create(email, password)
			res.json(newUser.rows[0])
		} catch (err) {
			res.json(err)
		}
	}
	
	async findAll(req, res) {
		try {
			const users = await usersService.findAll()
			res.json(users.rows)
		} catch (err) {
			res.json(err)
		}
	}
	
	async findOne(req, res) {
		try {
			const id = req.params.id
			const user = await usersService.findOne(id)
			res.json(user.rows[0])
		} catch (err) {
			res.json(err)
		}
	}
	
	async delete(req, res) {
		try {
			const id = req.params.id
			const user = await usersService.delete(id)
			res.json(user.rows[0])
		} catch (err) {
			res.json(err)
		}
	}
}

export const usersController = new UsersController()