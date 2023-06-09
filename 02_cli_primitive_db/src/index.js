import inquirer from "inquirer";
import {questions} from "./questions.js";
import {readDataFromDB} from "./utils/readDataFromDB.js";
import {writeDataToDB} from "./utils/writeDataToDB.js";
import {searchUserByName} from "./utils/searchUserByName.js";

const ask = async () => {
	inquirer.prompt(questions).then(async answers => {
		
		if (answers.name && answers.gender && answers.age) await writeDataToDB(answers)
		
		if (answers.name !== '') await ask()
		
		if (answers.showDataFromDB === true) {
			let data = await readDataFromDB()
			console.log(data)
			inquirer.prompt({
				type: 'input',
				name: 'searchUserName',
				message: 'Enter user\'s name you want to find in DB'
			}).then(async answers => {
				await searchUserByName(answers.searchUserName)
			})
		}
	})
}

await ask()

