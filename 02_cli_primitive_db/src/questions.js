export const questions = [
	{
		type: 'input',
		name: 'name',
		message: 'Enter the user\'s name. To cancel press ENTER:',
		validate: (answer) => {
			if ((!isNaN(answer) && answer !== '')) {
				return 'Name must be a string!'
			}
			return true;
		}
	},
	{
		type: "list",
		name: "gender",
		message: "Choose your Gender.",
		choices: ["male", "female"],
		when(answers) {
			return answers.name !== ''
		}
	},
	{
		type: 'input',
		message: 'Enter your age.',
		name: 'age',
		validate: (answer) => {
			if (isNaN(answer)) {
				return 'Age must be a number!'
			}
			return true;
		},
		when(answers) {
			return answers.name !== ''
		}
	},
	{
		type: 'confirm',
		name: 'showDataFromDB',
		message: 'Would you like to search values in DB?',
		default: true,
		when(answers) {
			return answers.name === ''
		}
	}
]