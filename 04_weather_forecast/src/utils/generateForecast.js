export const generateForecast = (weatherForecast, interval) => {
	
	let forecastWithInterval = []
	for (let i = 0; i < weatherForecast.length; i++) {
		if (interval === '1' && i % 2 === 1) {
			forecastWithInterval.push(weatherForecast[i])
		} else if (interval === '0') {
			forecastWithInterval.push(weatherForecast[i])
		}
	}
	
	const forecastObject = {}
	forecastWithInterval.forEach((forecast_data) => {
		
		const {dt, main, weather} = forecast_data
		const date = new Date(dt * 1000).toLocaleString('en-US', {weekday: 'long', day: 'numeric', month: 'long'})
		
		const forecast = {
			time: new Date(dt * 1000).toLocaleString('en-US', {hour12: false, hour: 'numeric', minute: 'numeric'}),
			temp: main.temp.toFixed(1),
			feelsLike: main.feels_like.toFixed(1),
			weatherDescription: weather[0].description,
			icon: getIcon(weather[0].icon)
		}
		
		if (forecastObject[date]) {
			forecastObject[date].push(forecast)
		} else {
			forecastObject[date] = []
			forecastObject[date].push(forecast)
		}
	})
	
	let forecastMessage = ''
	for (const key in forecastObject) {
		forecastMessage = forecastMessage + `${key} \n`
		forecastObject[key].forEach((forecast) => {
			const {time, temp, feelsLike, weatherDescription, icon} = forecast
			let digit
			temp >= 0 ? digit = '+' : digit = ''
			forecastMessage = forecastMessage + `${time} ${digit}${temp}°C, Feels Like: ${digit}${feelsLike}°C, ${weatherDescription} ${icon} \n`
		})
		forecastMessage = forecastMessage + `\n`
	}
	
	return forecastMessage
}

function getIcon(icon) {
	switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
};