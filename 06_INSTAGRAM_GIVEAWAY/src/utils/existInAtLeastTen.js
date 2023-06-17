export const existInAtLeastTen = (sortedWords) => {
	let counter = 0
	
	for (let value of sortedWords.values()) {
		if (value >= 10) counter++
	}
	
	return counter
}