import {db} from "../index.js";

class UsersService {
	async create(email, password) {
		try {
			return await db.query('INSERT INTO users (email, password) values ($1, $2) RETURNING *', [email, password])
		} catch (err) {
			throw new Error(`userService.create: ${err}`)
		}
	}
	
	async findAll() {
		try {
			return await db.query('SELECT * FROM users')
		} catch (err) {
			throw new Error(`userService.findAll: ${err}`)
		}
	}
	
	async findOne(id) {
		try {
			return await db.query('SELECT * FROM users where id = $1', [id])
		} catch (err) {
			throw new Error(`userService.findOne: ${err}`)
		}
	}
	
	async delete(id) {
		try {
			return await db.query('DELETE FROM users where id = $1', [id])
		} catch (err) {
			throw new Error(`userService.delete: ${err}`)
		}
	}
}

export const usersService = new UsersService()