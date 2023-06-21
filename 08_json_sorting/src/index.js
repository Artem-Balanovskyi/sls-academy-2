import {fetchData} from "./utils/fetchData.js";
import {findIsDoneRecursive} from "./utils/findIsDoneRecursive.js";
import {endpoints} from "./utils/endpoints.js";

const isDoneCounter = async (endpoints) => {
	
	let isDoneTrue = 0
	let isDoneFalse = 0
	
	for (const endpoint of endpoints) {
		const data = await fetchData(endpoint)
		
		if (data === null) {
			console.log(`[Fail] ${endpoint}: The endpoint is unavailable`)
			continue
		}
		
		const isDone = findIsDoneRecursive(data)
		console.log(`[Success] ${endpoint}: isDone - ${isDone}`)
		isDone ? isDoneTrue++ : isDoneFalse++
	}
	
	console.log(`Found True values: ${isDoneTrue},`)
	console.log(`Found False values: ${isDoneFalse}`)
}

await isDoneCounter(endpoints)