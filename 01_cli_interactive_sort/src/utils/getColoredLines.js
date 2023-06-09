export const getCyanLine = (text) => {
	return ('\x1b[1;34m' + text + '\x1b[0m')
}

export const getRedLine = (text) => {
	console.log('\x1b[1;31m' + text + '\x1b[0m');
}

export const getYellowLine = (text) => {
	return ('\x1b[1;33m' + text + '\x1b[0m');
}
