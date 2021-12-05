const Ajv = require('ajv');

const loginSchema = require('./login.json');
const usersSchema = require('./users.json');
const categoriesSchema = require('./categories.json');

const ajv = new Ajv({ allErrors: true });
require('ajv-formats')(ajv);
require('ajv-errors')(ajv);

ajv.addSchema(usersSchema, 'users');
ajv.addSchema(loginSchema, 'login');
ajv.addSchema(categoriesSchema, 'categories');

module.exports = ajv;
