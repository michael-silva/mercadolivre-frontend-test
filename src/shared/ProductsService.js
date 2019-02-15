import { CONDITIONS } from '../constants';
import CurrencyService from './CurrencyService';

export class ProductsService {

  formatProduct(originalProduct) {
    if (!originalProduct) return;
    const product = { ...originalProduct };
    product.price.amount_label = CurrencyService.formatAmount(originalProduct.price.currency, originalProduct.price.amount);
    const decimalsString = originalProduct.price.decimals.toString();
    product.price.decimals_label = decimalsString.length === 1 ? `${decimalsString}0` : decimalsString;
    if (originalProduct.condition) {
      product.condition_label = CONDITIONS[originalProduct.condition];
    }
    if (originalProduct.description) {
      product.description = originalProduct.description.replace(/\n/gm, '<br />');
    }
    return product;
  }
}

const instance = new ProductsService();
export default instance;
