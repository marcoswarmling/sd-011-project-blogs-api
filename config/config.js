module.exports = {
  development: {
    username: process.env.MYSQL_USER || 'mikael',
    password: process.env.MYSQL_PASSWORD || '&d27082020&',
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER || 'mikael',
    password: process.env.MYSQL_PASSWORD || '&d27082020&',
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER || 'mikael',
    password: process.env.MYSQL_PASSWORD || '&d27082020&',
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
