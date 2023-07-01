import db from "../database/db.js"
class UserController {
	async createUser(req, res) {
		const {email, password} = req.body
		const newUser = await db.query('INSERT INTO users (email, password) values ($1, $2) RETURNING *', [email, password])
		res.json(newUser.rows[0])
	}
	
	async findAllUsers(req, res) {
		const users = await db.query('SELECT * FROM users')
		res.json(users.rows)
	}
	
	async findUserById(req, res) {
		const id = req.params.id
		const user = await db.query('SELECT * FROM users where id = $1', [id])
		res.json(user.rows[0])
	}
	
	async deleteUserById(req, res) {
		const id = req.params.id
		const user = await db.query('DELETE FROM users where id = $1', [id])
		res.json(user.rows[0])
	}
}

export const userController = new UserController()