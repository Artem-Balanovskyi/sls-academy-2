import axios from "axios";

export const getExchangeRatesPrivatBank = async (currency) => {
	const {data} = await axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
	return data.find(rate => rate.ccy === currency);
}