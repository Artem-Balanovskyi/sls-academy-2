import TelegramApi from 'node-telegram-bot-api'
import 'dotenv/config';
import {getWeatherByLocation} from "./utils/getWeatherByLocation.js";
import {getLocationByName} from "./utils/getLocationByName.js";
import {generateForecast} from "./utils/generateForecast.js";
import {botSendSelectIntervalMessage} from "./utils/botSendSelectIntervalMessage.js";

export const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY
const TELEGRAM_API_TOKEN = process.env.TELEGRAM_API_TOKEN
export let chatId
let locationName = 'Odessa', locationCountry = 'UA'

export const bot = new TelegramApi(TELEGRAM_API_TOKEN, {polling: true})
bot.on('message', async msg => {
	try {
		chatId = msg.chat.id
		
		if (msg.text === '/start') {
			await bot.sendMessage(chatId, 'Hi, I\'m the Weather Forecast Bot! \n' +
				'Please select the location name',
				{
					reply_markup: {
						inline_keyboard: [
							[{text: `Forecast in Odessa`, callback_data: 'odessa'}],
							[{text: `Select other city`, callback_data: 'other'}],
						]
					}
				})
		}
		
		if (msg.text !== '/start') {
			let {name, country} = await getLocationByName(msg.text)
			locationName = name
			locationCountry = country
			
			if (name) {
				await botSendSelectIntervalMessage(chatId)
			} else {
				await bot.sendMessage(chatId, `Sorry, I can't find this location. Try one more time.`)
			}
		}
	} catch (err) {
		console.log(`bot.on 'message' ERROR: ${err.message}`)
	}
	
})

bot.on('callback_query', async (msg) => {
	try {
		switch (msg.data) {
			case 'odessa':
				await botSendSelectIntervalMessage(chatId)
				break
			case 'other':
				await bot.sendMessage(chatId, `Please specify the location name.`)
				break
			case '0':
			case '1':
				const interval = msg.data;
				const weatherForecast = await getWeatherByLocation(locationName)
				
				await bot.sendMessage(chatId,
					`The weather forecast for the ${locationName}, ${locationCountry}: \n` + `\n` +
					`${generateForecast(weatherForecast, interval)}`);
				break
			default:
				console.log(`Oops, something is wrong \_(o_O)_/`)
		}
	} catch (err) {
		console.log(`bot.on 'callback_query' ERROR: ${err.message}`);
	}
});