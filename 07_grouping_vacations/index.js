const transformDevelopers = async () => {
	try {
		const response = await fetch('https://jsonbase.com/sls-team/vacations');
		const vacations = await response.json()
		
		const developers = new Map()
		
		vacations.forEach((vacation) => {
			const { _id, name } = vacation.user
			
			if (!developers.has(_id)) {
				developers.set(_id, {
					userId: _id,
					userName: name,
					vacations: []
				})
			}
			
			developers.get(_id).vacations.push({
				startDate: vacation.startDate,
				endDate: vacation.endDate
			})
		})
		
		return JSON.stringify([...developers.values()])
	} catch (err) {
		console.log(err.message)
	}
}

console.log(await transformDevelopers())
