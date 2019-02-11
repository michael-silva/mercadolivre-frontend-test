import path from 'path';
import fs from 'fs';

import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

import { StaticRouter } from 'react-router';
import { Frontload, frontloadServerRender } from 'react-frontload';
import Loadable from 'react-loadable';

import createServerStore from './store';
import App from '../src/components/App';

// A simple helper function to prepare the HTML markup
const prepHTML = (data, { html, head, body }) => {
  data = data.replace('<html lang="en">', `<html ${html}`);
  data = data.replace('</head>', `${head}</head>`);
  data = data.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  return data;
};

const universalLoader = (req, res) => {
  // Load in our HTML file from our build
  const filePath = path.resolve(__dirname, '../build/index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    // If there's an error... serve up something nasty
    if (err) {
      console.error('Read error', err);

      return res.status(404).end();
    }

    // Create a store and sense of history based on the current path
    //const { store, history } = createServerStore(req.url);
    const { store, history } = createServerStore(req.path);

    const modules = {};
    const context = {};

    const routeMarkup = renderToString(
      <Loadable.Capture report={m => modules.push(m)}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <Frontload isServer={true}>
              <App />
            </Frontload>
          </StaticRouter>
        </Provider>
      </Loadable.Capture>
    );

    // Let Helmet know to insert the right tags
    const helmet = Helmet.renderStatic();

    // Form the final HTML response
    const html = prepHTML(htmlData, {
      html: helmet.htmlAttributes.toString(),
      head:
        helmet.title.toString() +
        helmet.meta.toString() +
        helmet.link.toString(),
      body: routeMarkup
    });

    // Up, up, and away...
    res.send(html);
  });
};

export default universalLoader;