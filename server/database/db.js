import { Client } from 'pg';

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'ikoProject',
    user: 'postgres',
    password: ''
});

(async () => {
    await client.connect();
})();

export default client;