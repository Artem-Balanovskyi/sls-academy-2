import NodeCache from "node-cache";
import axios from "axios";

const cache = new NodeCache({stdTTL: 60});

export const getExchangeRatesMonobank = async (currency) => {
	const currencyCodes = {
		USD: 840,
		EUR: 978,
		UAH: 980
	}
	
	const cachedRates = cache.get('monobank-rates');
	if (cachedRates) {
		return findCurrencyRates(cachedRates, currency)
	} else {
		const {data} = await axios.get('https://api.monobank.ua/bank/currency')
		cache.set('monobank-rates', data);
		return findCurrencyRates(data, currency)
	}
	
	function findCurrencyRates(rates, currency) {
		return rates.find(rate => rate.currencyCodeA === currencyCodes[currency] && rate.currencyCodeB === currencyCodes["UAH"])
	}
}