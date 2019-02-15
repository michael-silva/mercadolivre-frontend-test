const express = require('express');
const request = require('request-promise');

const author = {
  name: 'Michael',
  lastname: 'Silva',
};

function mapApiResultToItem(product) {
  const priceString = product.price.toString();
  const priceSplited = priceString.split('.');
  const item = {
    'id': product.id,
    'title': product.title,
    'price': {
      'currency': product.currency_id,
      'amount': +priceSplited[0],
      'decimals': +(priceSplited[1] || '0')
    },
    'condition': product.condition,
    'free_shipping': product.shipping.free_shipping,
    'picture': product.thumbnail,
    'state': product.address ? product.address.state_name : '',
  };
  return item;
}

function mapApiResultToProduct(product, description) {
  const item = mapApiResultToItem(product);
  if (product.pictures.length > 0) {
    item.picture = product.pictures[0].url;
  }
  item.category = product.category_id;
  item.sold_quantity = product.sold_quantity;
  item.description = description.plain_text;
  return item;
}

const apiRouter = express.Router()

apiRouter.get('/items', async (req, res) => {
  try {
    const { q } = req.query;
    const response = await request({ url: `https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`, json: true });
    const categories = [];
    const items = [];
    response.results.forEach((result) => {
      categories.push(result.category_id);
      const item = mapApiResultToItem(result);
      items.push(item);
    });
    res.json({ author, categories, items });
  }
  catch (e) {
    res.status(500).json({ error: e });
  }
});

apiRouter.get('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await request({ url: `https://api.mercadolibre.com/items/${id}`, json: true });
    const description = await request({ url: `https://api.mercadolibre.com/items/${id}/description`, json: true });
    const item = mapApiResultToProduct(product, description);
    res.json({ author, item });
  }
  catch (e) {
    res.status(500).json({ error: e });
  }
});

apiRouter.get('/categories/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await request({ url: `https://api.mercadolibre.com/categories/${id}`, json: true });
    const category = result.name;
    const path = result.path_from_root.map(item => item.name);
    res.json({ category, path });
  }
  catch (e) {
    res.status(500).json({ error: e });
  }
});

export default apiRouter;
