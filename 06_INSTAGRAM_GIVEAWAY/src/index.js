import {sortUniqueWordsByRepetitions} from "./utils/sortUniqueWordsByRepetitions.js";
import {uniqueValues} from "./utils/uniqueValues.js";
import {existInAllFiles} from "./utils/existInAllFiles.js";
import {existInAtLeastTen} from "./utils/existInAtLeastTen.js";

const execute = async () => {
	try {
		console.time('Execution time')
		
		const sortedWords = await sortUniqueWordsByRepetitions()
		console.log(`uniqueValues(): => ${uniqueValues(sortedWords)}`)
		console.log(`existInAllFiles(): => ${existInAllFiles(sortedWords)}`)
		console.log(`existInAtLeastTen(): => ${existInAtLeastTen(sortedWords)}\n`)
		
		console.timeEnd('Execution time')
	} catch (err) {
		console.log(`getElapsedTime ERROR: ${err.message}`)
	}
}

await execute()

