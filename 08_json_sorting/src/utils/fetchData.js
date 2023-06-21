export const fetchData = async (url, attempt = 1) => {
	if (attempt <= 3) {
		try {
			const response = await fetch(url)
			return await response.json()
		} catch (err) {
			console.log(`Endpoint: ${url}, Attempt: ${attempt}`)
			return await fetchData(url, ++attempt)
		}
	} else {
		return null
	}
}