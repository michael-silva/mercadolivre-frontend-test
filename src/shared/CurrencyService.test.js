import CurrencyService from './CurrencyService';

describe('CurrencyService', () => {
  it('Should get currrency for USA', () => {
    const formated = '$ 1,000';
    const country = 'USD';
    const amount = 1000;
    const currencyService = new CurrencyService();
    const result = currencyService.formatAmount(country, amount);
    expect(result).toEqual(formated);
  });

  it('Should get currrency for Argentina', () => {
    const formated = '$ 1.000.000';
    const country = 'ARS';
    const amount = 1000000;
    const currencyService = new CurrencyService();
    const result = currencyService.formatAmount(country, amount);
    expect(result).toEqual(formated);
  });


  it('Should get currrency for Japan', () => {
    const formated = '¥ 100';
    const amount = 100;
    const country = 'JPY';
    const currencyService = new CurrencyService();
    const result = currencyService.formatAmount(country, amount);
    expect(result).toEqual(formated);
  });
});