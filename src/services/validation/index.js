const Ajv = require('ajv');
const addErrors = require('ajv-errors');

const { ValidationError } = require('../../errors');
const {
  user: userSchemas,
  category: categorySchemas,
} = require('./schemas');

const ajv = new Ajv({ allErrors: true });

addErrors(ajv);

ajv.addSchema(userSchemas.create, 'createUser');
ajv.addSchema(userSchemas.login, 'loginUser');
ajv.addSchema(categorySchemas.create, 'createCategory');

class Schema {
  constructor(name) {
    this.schema = ajv.getSchema(name);
  }

  validate(data) {
    const valid = this.schema(data);

    if (!valid) {
      const { message } = this.schema.errors[0];
      throw new ValidationError(message);
    }
  }
}

module.exports = {
  Schema,
};
