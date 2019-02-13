import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import compression from 'compression';
import universalLoader from './universal';
import apiRouter from './api';
import cache from './cache';

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up route handling, include static assets and an optional API
if (process.env.NODE_ENV === 'production') {
    const cacheTime = process.env.CACHE_TIME || 60;
    app.use(express.static(path.resolve(__dirname, '../build')));
    app.use('/api', cache(cacheTime), apiRouter);
    app.use('/', cache(cacheTime), universalLoader);
}
else {
    app.use('/api', apiRouter);
}

app.listen(port, () => console.log(`Listening on port ${port}`));
