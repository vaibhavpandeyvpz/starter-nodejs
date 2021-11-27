module.exports = {
  local: {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: null,
    database: 'test',
  },
  development: {
    url: process.env.DATABASE_URL,
  },
  production: {
    url: process.env.DATABASE_URL,
  },
};
