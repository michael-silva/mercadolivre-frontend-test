import CurrencyService from './CurrencyService';

describe('CurrencyService', () => {
  it('Should get currrency for USA', () => {
   const symbol = '$';
   const country = 'USD';
   const currencyService = new CurrencyService();
   const result = currencyService.getSymbol(country);
   expect(result).toEqual(symbol);
  });

  it('Should get currrency for Argentina', () => {
   const symbol = '$';
   const country = 'ARS';
   const currencyService = new CurrencyService();
   const result = currencyService.getSymbol(country);
   expect(result).toEqual(symbol);
  });
  
  
  it('Should get currrency for Japan', () => {
    const symbol = '¥';
    const country = 'JPY';
    const currencyService = new CurrencyService();
    const result = currencyService.getSymbol(country);
    expect(result).toEqual(symbol);
   });
});