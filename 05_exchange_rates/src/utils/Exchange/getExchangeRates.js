import {getExchangeRatesMonobank} from "./getExchangeRatesMonobank.js";
import {getExchangeRatesPrivatBank} from "./getExchangeRatesPrivatBank.js";

export const getExchangeRates = async (currency) => {
	
	const monobankRates = await getExchangeRatesMonobank(currency)
	const privatBankRates = await getExchangeRatesPrivatBank(currency)
	
	return `
Monobank ${currency}/UAH:
Buy: ${monobankRates.rateBuy}, Sell: ${monobankRates.rateSell}

Privat Bank ${currency}/UAH:
Buy: ${privatBankRates.buy}, Sell: ${privatBankRates.sale}`
}
