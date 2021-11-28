require('dotenv').config();

const { MYSQL_USER, MYSQL_PASSWORD, HOSTNAME } = process.env;

module.exports = {
  development: {
    username: 'root',
    password: 'Dario@55852565',
    database: 'blogs_api',
    host: 'localhost',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: 'Dario@55852565',
    database: 'blogs_api',
    host: 'localhost',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: 'Dario@55852565',
    database: 'blogs_api',
    host: 'localhost',
    dialect: 'mysql',
  },
};