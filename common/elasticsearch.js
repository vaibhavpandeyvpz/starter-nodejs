const { Client } = require('@elastic/elasticsearch');

module.exports = new Client({ node: process.env.ELASTICSEARCH_URL });
