const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'ikoProject',
    user: 'postgres',
    password: ''
});

client.connect((err) => {
        console.log('connection error', err)
});

client.connect();

export default client;