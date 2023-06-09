import {readDataFromDB} from "./readDataFromDB.js";

export const searchUserByName = async (name) => {
	const data = await readDataFromDB()
	const mappedUsers = data.reduce((users, user) => {
		if (user.name.toLowerCase() === name.toLowerCase()) {
			users.push(user)
		}
		return users
	}, [])
	if (mappedUsers.length > 0) {
		console.log(mappedUsers)
	} else {
		console.log(`Such a user does not exist`)
	}
}