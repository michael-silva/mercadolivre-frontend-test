import { CONFIG } from '../constants';

export class SEOService {
    getTitle(products, query) {
        if (!products || !query) return '';
        if (products.length === 0 && query.length === 0) {
            return `${CONFIG.GLOBAL_TITLE}`;
        }
        else if (products.length === 1) {
            return `Compre ${products[0].title} no ${CONFIG.GLOBAL_TITLE}`;
        }
        else {
            return `Resultados para ${query} no ${CONFIG.GLOBAL_TITLE}`;
        }
    }

    getDescription(products, query) {
        if (!products || !query) return '';
        if (products.length === 0 && query.length === 0) {
            return `${CONFIG.DEFAULT_DESC}`;
        }
        else if (products.length === 1) {
            return `Compre ${products[0].title} por ${products[0].price.amount} no ${CONFIG.GLOBAL_TITLE}`;
        }
        else {
            return `Resultados para ${query} no ${CONFIG.GLOBAL_TITLE}`;
        }
    }
}

const instance = new SEOService();
export default instance;