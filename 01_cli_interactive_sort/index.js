import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import {getCyanLine, getYellowLine} from "./utils/getColoredLines.js";
import {validateData} from "./utils/validateData.js";


const defaultString = "big get apple three 3 1 16 get yellow what 3 apple 2 999 green 728 big  1 & # 2 @ 146"
export const rl = readline.createInterface({input, output});
export const bootstrap = async () => {
	
	let dataString = await rl.question(getCyanLine(`Hello. Enter 10 words or digits dividing them in spaces: `));
	
	const sortMethod = await rl.question(`${getCyanLine(`How would you like to sort values?`)}
1. Words by name (from A to Z).
2. Show digits from smallest.
3. Show digits from biggest.
4. Words by quantity of letters.
5. Only unique words.
6. Only unique words and numbers.

${getYellowLine(`To exit the program, you need to enter "exit".`)}

${getCyanLine(`Select (1-6) and press ENTER: `)}`)
	
	await validateData(dataString, sortMethod)
}

await bootstrap()



