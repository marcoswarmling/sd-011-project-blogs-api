require('dotenv').config();

module.exports = {
	development: {
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: 'blogs_api',
		host: process.env.MYSQ_HOST_NAME,
		dialect: 'mysql',
	},
	test: {
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: 'blogs_api',
		host: process.env.MYSQ_HOST_NAME,
		dialect: 'mysql',
	},
	production: {
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: 'blogs_api',
		host: process.env.MYSQ_HOST_NAME,
		dialect: 'mysql',
	},
};
