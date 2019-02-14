const ignoreStyles = require('ignore-styles').default;
require("@babel/polyfill");

ignoreStyles(undefined, require('./filesHandler').default);

require('@babel/register')({
    ignore: [/(build|node_modules)/],
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ["@babel/plugin-proposal-class-properties"]
});

require('./server');