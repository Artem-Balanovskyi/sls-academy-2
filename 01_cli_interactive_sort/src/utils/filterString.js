export const filterOnlyDigits = (dataString) => {
	return dataString.replace(/[^0-9 ]/g, '').split(' ').filter((item) => item !== "" && !isNaN(item))
}

export const filterOnlyWords = (dataString) => {
	return dataString.replace(/[^a-z A-Z]/g, '').split(' ').filter((item) => item !== "" && isNaN(item))
}

export const filterWordsAndDigits = (dataString) => {
	return dataString.replace(/[^a-zA-Z0-9 ]/g, '').split(' ').filter((item) => item !== "" )
}
