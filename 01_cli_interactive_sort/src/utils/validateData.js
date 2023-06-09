import {sortData} from "./sortData.js";
import {getRedLine} from "./getColoredLines.js";
import {bootstrap} from "../index.js";

export const validateData = async (dataString, sortMethod) => {
	if (dataString !== '' && sortMethod !== '') {
		await sortData(dataString, sortMethod)
	} else {
		if (dataString === '') {
			getRedLine(`You should enter data for sorting.`)
			await bootstrap()
		}
		if (sortMethod === '') {
			getRedLine(`You should enter method of sorting.`)
			await bootstrap()
		}
	}
}