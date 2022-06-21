module.exports = {
  apis: ['./routes/*.js'],
  definition: {
    basePath: '/',
    explorer: true,
    info: {
      title: 'Node.js Starter',
      version: '1.0.0',
    },
    securityDefinitions: {
      jwt: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
      },
    },
    swagger: '2.0',
  },
};
