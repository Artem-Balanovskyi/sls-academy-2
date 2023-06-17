import {bot} from "../index.js";

export const botSendSelectIntervalMessage = async (chatId) => {
	await bot.sendMessage(chatId, 'Please select the weather forecast interval:', {
		reply_markup: {
			keyboard: [
				[`Every 3 hours`,`Every 6 hours`],
				[`Back to the Main Menu`]
			],
			resize_keyboard: true,
			one_time_keyboard: true
		},
	})
}