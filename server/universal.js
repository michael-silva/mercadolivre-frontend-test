import React from "react";
import fs from 'fs';
import path from 'path';
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Helmet from 'react-helmet';
import createStore from './store';
import AppContainer from "../src/containers/AppContainer";
import { componentsToRender } from '../src/shared/ServerSideComponent';

function loadHtmlTemplate(reactDom, reduxState) {
    // Load in our HTML file from our build
    const filePath = path.resolve(__dirname, '../build/index.html');

    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, htmlData) => {
            if (err) return reject(err);

            const htmlRoot = `<div id="root">${reactDom}</div>
                <script>window.REDUX_DATA = ${ JSON.stringify(reduxState)}</script>`;
            let htmlFinal = htmlData.replace('<div id="root"></div>', htmlRoot);
            resolve(htmlFinal);
        });
    });
}

const universalLoader = (req, res) => {
    const context = {};
    const store = createStore();

    const appJsx = (
        <Provider store={store}>
            <StaticRouter context={context} location={req.url}>
                <AppContainer />
            </StaticRouter>
        </Provider>);
    
    renderToString(appJsx);
    Promise.all(componentsToRender.map(c => c.fetchInitialData()))
        .then(() => {
            componentsToRender.splice(0);
            let reduxState = store.getState();

            const reactDom = renderToString(appJsx);

            return loadHtmlTemplate(reactDom, reduxState);
        })
        .then(html => {
            const helmet = Helmet.renderStatic();
            const helmetData = helmet.title.toString() + helmet.meta.toString();
            const page = html.replace('</head>', `${helmetData}</head>`);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(page);
        })
        .catch(err => {
            console.error('Read error', err);
            return res.status(404).end();
        });
};

export default universalLoader;