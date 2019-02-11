import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import compression from 'compression';
import universalLoader from './universal2';
//import universalLoader from './universal';
import apiRouter from './api';
import clientRouter from './client';

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up route handling, include static assets and an optional API
app.use('/', clientRouter);
app.use(express.static(path.resolve(__dirname, '../build')));
app.use('/api', apiRouter);
app.use('/', universalLoader);

app.listen(port, () => console.log(`Listening on port ${port}`));
