const SQL = require('sql-template-strings');

const getUsers = async function (client) {
    const query = SQL`
    SELECT
     *
    FROM
        user
    `
    const queryResult = await client.query(query)
    return queryResult;
}

module.exports = { getUsers };