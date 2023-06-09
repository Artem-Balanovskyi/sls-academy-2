import {bootstrap, rl} from "../index.js";
import {getCyanLine, getRedLine} from "./getColoredLines.js";
import {filterOnlyDigits, filterOnlyWords, filterWordsAndDigits} from "./filterString.js";

export const sortData = async (dataString, sortMethod) => {
	switch (sortMethod) {
		case '1':
			console.log(filterOnlyWords(dataString).sort())
			await bootstrap()
			break
		case '2':
			console.log(filterOnlyDigits(dataString).sort((a, b) => a - b))
			await bootstrap()
			break;
		case '3':
			console.log(filterOnlyDigits(dataString).sort((a, b) => b - a))
			await bootstrap()
			break;
		case '4':
			console.log(filterOnlyWords(dataString).sort((a, b) => a?.length - b?.length))
			await bootstrap()
			break;
		case '5':
			console.log([...new Set(filterOnlyWords(dataString))])
			await bootstrap()
			break;
		case '6':
			console.log([...new Set(filterWordsAndDigits(dataString))])
			await bootstrap()
			break;
		case 'exit':
			console.log(getCyanLine('Good bye! Come back again!'))
			rl.close()
			break;
		default:
			getRedLine(`You should enter the number [1-6] of sort method or "exit"`)
			await bootstrap()
	}
}