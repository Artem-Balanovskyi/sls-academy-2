import {readdir, readFile} from "node:fs/promises";

export const sortUniqueWordsByRepetitions = async () => {
	try {
		const wordsRepeatCounter = new Map()
		const files = await readdir(`./src/2kk_words_400x400/`)
		
		for (let i = 0; i < files.length; i++) {
			const filePath = `./src/2kk_words_400x400/out${i}.txt`
			const onlyUniqueWords = new Set((await readFile(filePath, {encoding: 'utf8'})).split(`\n`))
			
			for (let word of onlyUniqueWords) {
				if (!wordsRepeatCounter.has(word)) {
					wordsRepeatCounter.set(word, 1)
				} else {
					wordsRepeatCounter.set(word, wordsRepeatCounter.get(word) + 1)
				}
			}
		}
		
		return wordsRepeatCounter
	} catch (err) {
		console.log(`collectAllWords ERROR: ${err.message}`)
	}
}