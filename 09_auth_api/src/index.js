import express from 'express'
import path from "path"
import 'dotenv/config'
import {initRoutes} from './routes/routes.js'

const app = express()
const PORT = process.env.PORT || 3000
const __dirname = path.resolve()

app.use(express.static(path.resolve(__dirname, 'src', 'static')))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app)
app.listen(PORT, () => {
	console.log(`Server has been started on port ${PORT}...`)
})