import TelegramApi from 'node-telegram-bot-api'
import {Command} from "commander";
import 'dotenv/config';

const bot = new TelegramApi(process.env.TELEGRAM_API_TOKEN, {polling: true})
const program = new Command()
const chatId= process.env.TELEGRAM_CHAT_ID

program
	.name('app')
	.version('0.8.0');

program
	.command("send-message")
	.description("Send message to Telegram Bot")
	.argument("<message>", "string to send")
	.alias("m")
	.action(async (str) => {
		await bot.sendMessage(chatId, str);
		process.exit(0);
	});

program
	.command("send-photo")
	.description("Send photo to Telegram Bot. Just drag and drop in console after p-flag.")
	.argument("<path>", "path to file")
	.alias("p")
	.action(async (photo) => {
		await bot.sendPhoto(chatId, photo);
		process.exit(0);
	});

program.parse();


