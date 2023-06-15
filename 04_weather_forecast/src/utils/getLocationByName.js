import 'dotenv/config'
import axios from "axios";
import {OPEN_WEATHER_API_KEY} from "../index.js";

export const getLocationByName = async (locationName) => {
	try {
		const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct`, {
			params: {
				q: locationName,
				appid: OPEN_WEATHER_API_KEY
			}
		})
		
		const {name, country} = response.data[0];
		
		return {name, country}
	} catch (err) {
		console.log(`getLocationByName ERROR: ${err.message}`);
	}
}