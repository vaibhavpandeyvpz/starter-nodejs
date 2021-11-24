const AWS = require('aws-sdk');

const endpoint = new URL(process.env.AWS_ENDPOINT);

module.exports = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  endpoint: endpoint.host,
  region: process.env.AWS_DEFAULT_REGION,
  sslEnabled: endpoint.protocol === 'https:',
  s3ForcePathStyle: true,
});
