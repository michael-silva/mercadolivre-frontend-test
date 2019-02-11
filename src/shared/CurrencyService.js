export class CurrencyService {
  constructor() {
    this.currency_symbols = {
      'USD': { symbol: '$', separator: ',', }, // US Dollar
      'EUR': { symbol: '€', separator: '.', }, // Euro
      'CRC': { symbol: '₡', separator: '.', }, // Costa Rican Colón
      'GBP': { symbol: '£', separator: '.', }, // British Pound Sterling
      'ILS': { symbol: '₪', separator: '.', }, // Israeli New Sheqel
      'INR': { symbol: '₹', separator: '.', }, // Indian Rupee
      'JPY': { symbol: '¥', separator: '.', }, // Japanese Yen
      'KRW': { symbol: '₩', separator: '.', }, // South Korean Won
      'NGN': { symbol: '₦', separator: '.', }, // Nigerian Naira
      'PHP': { symbol: '₱', separator: '.', }, // Philippine Peso
      'PLN': { symbol: 'zł', separator: '.', }, // Polish Zloty
      'PYG': { symbol: '₲', separator: '.', }, // Paraguayan Guarani
      'THB': { symbol: '฿', separator: ',', }, // Thai Baht
      'UAH': { symbol: '₴', separator: '.', }, // Ukrainian Hryvnia
      'VND': { symbol: '₫', separator: '.', }, // Vietnamese Dong
      'ARS': { symbol: '$', separator: '.', }, // Peso Argentino
      'BRL': { symbol: 'R$', separator: '.', }, // Real Brasileiro
    };
  }

  formatAmount(country, amount) {
    const countrySymbol = this.currency_symbols[country] || {};
    const symbol = countrySymbol.symbol || '';
    const number = this.formatThousand(amount, countrySymbol.separator || '');
    return `${symbol} ${number}`;
  }

  formatThousand(num, separator) {
    const n = String(num),
          p = n.indexOf('.')
    return n.replace(
        /\d(?=(?:\d{3})+(?:\.|$))/g,
        (m, i) => p < 0 || i < p ? `${m}${separator}` : m
    )
}
}

const instance = new CurrencyService();
export default instance;