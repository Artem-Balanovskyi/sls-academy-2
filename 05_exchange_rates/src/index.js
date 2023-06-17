import {getWeatherByLocation} from "./utils/Weather/getWeatherByLocation.js";
import {getLocationByName} from "./utils/Weather/getLocationByName.js";
import {generateForecast} from "./utils/Weather/generateForecast.js";
import {botSendSelectIntervalMessage} from "./utils/botSendSelectIntervalMessage.js";
import {getExchangeRates} from "./utils/Exchange/getExchangeRates.js";
import TelegramApi from 'node-telegram-bot-api'
import 'dotenv/config';

export const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY
const TELEGRAM_API_TOKEN = process.env.TELEGRAM_API_TOKEN
export let chatId
let locationName = 'Odessa', locationCountry = 'UA'

export const bot = new TelegramApi(TELEGRAM_API_TOKEN, {polling: true})
bot.on('message', async msg => {
	try {
		chatId = msg.chat.id
		
		switch (msg.text) {
			
			case '/start':
			case 'Back to the Main Menu':
				await bot.sendMessage(chatId, 'Hi, I\'m the Helper Bot! \n' +
					'How can I help you?',
					{
						reply_markup: {
							keyboard: [[`Weather forecast`], [`Exchange rates`]],
							resize_keyboard: true,
							one_time_keyboard: true
						}
					})
				break
			
			case 'Forecast in Odessa':
				await botSendSelectIntervalMessage(chatId)
				break
			
			case 'Select other city':
				await bot.sendMessage(chatId, `Please specify the location name.`)
				break
			
			case 'Every 3 hours':
			case 'Every 6 hours':
				const interval = msg.text[6];
				
				const weatherForecast = await getWeatherByLocation(locationName)
				
				await bot.sendMessage(chatId,
					`The weather forecast for the ${locationName}, ${locationCountry}: \n` + `\n` +
					`${generateForecast(weatherForecast, interval)}`);
				break
			
			case 'Weather forecast':
				await bot.sendMessage(chatId, 'Select the location please.',
					{
						reply_markup: {
							keyboard: [[`Forecast in Odessa`], [`Select other city`]],
							resize_keyboard: true,
							one_time_keyboard: true
						}
					})
				break
			
			case 'Exchange rates':
				await bot.sendMessage(chatId, 'Select the currency please.',
					{
						reply_markup: {
							keyboard: [
								[`USD`, `EUR`],
							[`Back to the Main Menu`]
							],
							resize_keyboard: true,
							one_time_keyboard: true
						}
					})
				break
			
			case 'USD':
				await bot.sendMessage(chatId, await getExchangeRates('USD'))
				break
			
			case 'EUR':
				await bot.sendMessage(chatId, await getExchangeRates('EUR'))
				break
			
			default:
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