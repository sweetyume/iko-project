import express from 'express';
import config from './config/config';

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(config.port, () => {
    console.log('ok');
});

module.exports = app;