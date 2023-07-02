import 'dotenv/config'
import pg from 'pg'

const {Pool} = pg

export async function connectToDatabase() {
	try {
		await createDatabase()
		return await createTable()
	} catch (err) {
		return await createTable()
	}
}

async function createDatabase() {
	try {
		const pool = new Pool({
			user: process.env.PG_USER,
			password: process.env.PG_PASSWORD,
			host: process.env.PG_HOST,
			port: process.env.PG_PORT
		})
		
		await pool.query(`CREATE DATABASE sls_academy;`)
	} catch (err) {
		throw new Error(`createDatabase: ${err}`)
	}
}

async function createTable() {
	try {
		const pool = new Pool({
			user: process.env.PG_USER,
			password: process.env.PG_PASSWORD,
			database: process.env.PG_DATABASE,
			host: process.env.PG_HOST,
			port: process.env.PG_CONTAINER_PORT
		})
		
		await pool.query(`CREATE EXTENSION if not exists "uuid-ossp";`)
		
		await pool.query(`CREATE TABLE if not exists users(
id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
 email VARCHAR(255) not null,
  password VARCHAR(255) not null
  );`)
		
		return pool
	} catch (err) {
		throw new Error(`createTable: ${err}`)
	}
}