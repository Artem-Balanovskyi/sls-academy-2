export const existInAllFiles = (sortedWords) => {
	let counter = 0
	
	for (let value of sortedWords.values()) {
		if (value === 20) counter++
	}
	
	return counter
}