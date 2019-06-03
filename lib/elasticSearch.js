require('./enviroment').variables();
const elasticSearch = require('elasticsearch');

const hostAndPort = `${process.env.ES_HOST}:${process.env.ES_PORT}`;

const client = new elasticSearch.Client({
    host: hostAndPort
});

module.exports = { client };
