import express from 'express';
import config from './config/config';
import router from './routes/router';
const server = express();

server.use(express.json());
server.use(router);
server.listen(config.port, () => {
    console.log(`Started on port ${config.port}`);
});
