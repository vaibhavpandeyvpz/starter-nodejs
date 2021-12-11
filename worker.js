const debug = require('debug')('starter-nodejs:worker');
const queue = require('./common/queue');

// eslint-disable-next-line no-unused-vars
queue.process(async ({ data }) => {
  // TODO Process job "data"
});

process.on('SIGINT', () => {
  debug('Shutting down worker.');
  queue.close()
    .then(() => process.exit(0));
});
