import 'dotenv/config'
import pg from 'pg'

const {Pool} = pg

const pool = new Pool({
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DATABASE,
	host: process.env.POSTGRES_HOST,
	port: 5432
})

export default pool
