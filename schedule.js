const debug = require('debug')('starter-nodejs:schedule');
const schedule = require('node-schedule');

schedule.scheduleJob('0 * * * *', () => {
  // TODO Run every hour
});

process.on('SIGINT', () => {
  debug('Shutting down scheduler.');
  schedule.gracefulShutdown()
    .then(() => process.exit(0));
});
