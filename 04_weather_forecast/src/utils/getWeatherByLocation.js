import 'dotenv/config'
import axios from "axios";
import {OPEN_WEATHER_API_KEY} from "../index.js";

export const getWeatherByLocation = async (locationName) => {
	try {
		const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
			params: {
				q: locationName,
				appid: OPEN_WEATHER_API_KEY,
				units: 'metric'
			}
		})
		return data.list
	} catch (err) {
		console.log(`getWeatherByLocation ERROR: ${err.message}`);
	}
}