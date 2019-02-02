const express = require('express');
const request = require('request-promise');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

const author = {
  name: 'Michael',
  lastname: 'Silva',
};

function mapApiResultToItem(product) {
  const priceString = product.price.toString();
  const priceSplit = priceString.length - 2;
  const item = {
    "id": product.id,
    "title": product.title,
    "price": {
      "currency": product.currency_id,
      "amount": +priceString.substring(0, priceSplit),
      "decimals": +priceString.substring(priceSplit)
    },
    "condition": product.condition,
    "free_shipping": product.shipping.free_shipping,
    "picture": product.thumbnail,
  };
  return item;
}

function mapApiResultToProduct(product, description) {
  const item = mapApiResultToItem(product);
  if (product.pictures.length > 0) {
    item.picture = product.pictures[0].url;
  }
  item.sold_quantity =  product.sold_quantity;
  item.description = description.plain_text;
  return item;
}

app.get('/api/items', async (req, res) => {
  try {
    const { q } = req.query;
    const response = await request({ url: `https://api.mercadolibre.com/sites/MLA/search?q=${q}`, json: true });
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

app.get('/api/items/:id', async (req, res) => {
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

if (process.env.PROD) {
  app.use(express.static(path.join(__dirname, 'build')));
  app.use('/*', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`);
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
