import { CONFIG } from '../constants';
import SEOService from './SEOService';

describe('SEOService', () => {

  it('Should get default title with dont have product or query', () => {
    const products = [];
    const query = '';

    const title = SEOService.getTitle(products, query);

    expect(title).toEqual(CONFIG.GLOBAL_TITLE);
  });

  it('Should get title with product title when have one product', () => {
    const products = [{ title: 'Nome do produto' }];
    const query = '';

    const title = SEOService.getTitle(products, query);
    
    expect(title).toContain(CONFIG.GLOBAL_TITLE);
    expect(title).toContain(products[0].title);
  });

  it('Should get title with query text when have multiples products', () => {
    const products = [{ title: 'Nome do produto 1' }, { title: 'Nome do produto 2' }];
    const query = 'produto';

    const title = SEOService.getTitle(products, query);
    
    expect(title).toContain(CONFIG.GLOBAL_TITLE);
    expect(title).not.toContain(products[0].title);
    expect(title).not.toContain(products[1].title);
    expect(title).toContain(query);
  });

  it('Should get title with query text when dont have products but have query', () => {
    const products = [];
    const query = 'test';

    const title = SEOService.getTitle(products, query);
    
    expect(title).toContain(CONFIG.GLOBAL_TITLE);
    expect(title).toContain(query);
  });

  it('Should get default description when dont have products or query', () => {
    const products = [];
    const query = '';

    const title = SEOService.getDescription(products, query);

    expect(title).toEqual(CONFIG.DEFAULT_DESC);
  });

  it('Should get description with product title when have one product', () => {
    const products = [{ title: 'Nome do produto', price: { amount: 10 } }];
    const query = '';

    const title = SEOService.getDescription(products, query);
    
    expect(title).toContain(CONFIG.GLOBAL_TITLE);
    expect(title).toContain(products[0].title);
  });

  it('Should get description with query text when have multiples products', () => {
    const products = [{ title: 'Nome do produto 1' }, { title: 'Nome do produto 2' }];
    const query = 'produto';

    const title = SEOService.getDescription(products, query);
    
    expect(title).toContain(CONFIG.GLOBAL_TITLE);
    expect(title).not.toContain(products[0].title);
    expect(title).not.toContain(products[1].title);
    expect(title).toContain(query);
  });

  it('Should get description with query text when dont have products but have query', () => {
    const products = [];
    const query = 'test';

    const title = SEOService.getDescription(products, query);
    
    expect(title).toContain(CONFIG.GLOBAL_TITLE);
    expect(title).toContain(query);
  });
});