import {writeFile} from 'node:fs/promises';
import {pathToDBFile} from '../constants.js';
import {readDataFromDB} from "./readDataFromDB.js";

export const writeDataToDB = async (data) => {
	try {
		const currentData = await readDataFromDB()
		currentData.push(data)
		const updatedData = JSON.stringify(currentData)
		await writeFile(pathToDBFile, updatedData, {encoding: 'utf8'});
	} catch (err) {
		console.log(`Error: ${err.message}`)
	}
};