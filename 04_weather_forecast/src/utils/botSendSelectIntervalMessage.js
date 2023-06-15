import {bot} from "../index.js";
export const botSendSelectIntervalMessage = async (chatId) => {
	await bot.sendMessage(chatId, 'Please select the weather forecast interval:', {
		reply_markup: {
			inline_keyboard: [
				[{text: `Every 3 hours`, callback_data: 0}],
				[{text: `Every 6 hours`, callback_data: 1}],
			]
		},
	})
}