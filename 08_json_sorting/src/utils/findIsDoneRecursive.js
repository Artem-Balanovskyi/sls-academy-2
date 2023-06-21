export const findIsDoneRecursive = (data) => {
	
	if (data.hasOwnProperty(`isDone`)) return data.isDone
	
	if (typeof data === 'object') {
		for (let prop in data) {
			const nestedData = data[prop]
			const result = findIsDoneRecursive(nestedData)
			if (result !== null) return result
		}
	}
	
	return null
}