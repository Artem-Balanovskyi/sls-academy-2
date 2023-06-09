import {readFile} from 'node:fs/promises';
import {pathToDBFile} from '../constants.js';

export const readDataFromDB = async () => {
	try {
		const data = await readFile(pathToDBFile, {encoding: 'utf8'})
		return JSON.parse(data)
	} catch (err) {
		console.log(`Error: ${err.message}`)
	}
};