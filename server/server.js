import express from 'express';
import config from './config/config';
import router from './routes/router';
const server = express();

server.use(router);
server.listen(config.port, () => {
    console.log('ok');
});
