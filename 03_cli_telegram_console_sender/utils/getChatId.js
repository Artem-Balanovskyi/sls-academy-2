import TelegramApi from 'node-telegram-bot-api'
import 'dotenv/config';

const bot = new TelegramApi(process.env.TELEGRAM_API_TOKEN, {polling: true})
bot.on('message' , async msg => {
	const text = msg.text
	const chatId = msg.chat.id
	
	if (text === '/start') {
		await bot.sendMessage(chatId, `Your chatId is: ${chatId}`)
	}
})