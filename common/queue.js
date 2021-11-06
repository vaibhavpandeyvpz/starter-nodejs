const Bull = require('bull');

module.exports = new Bull('default', process.env.QUEUE_URL);
