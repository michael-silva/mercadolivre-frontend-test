import ProductsService from './ProductsService';


describe('ProductsService', () => {

  it('Should format product item to view model', () => {
    const product = { id: '123', price: { amount: 1234, currency: 'USD', decimals: 0 } };
    const productFormated = { id: '123', price: { amount: 1234, amount_label: '$ 1,234', currency: 'USD', decimals: 0, decimals_label: '00' } };

    const result = ProductsService.formatProduct(product);
    expect(result).toEqual(productFormated);
  });
});