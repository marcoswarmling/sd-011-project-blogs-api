const { Category } = require('../../models');

const { verifyToken } = require('../../jwt');
const verifyFields = require('../../validations/verifyFields');
const { rules } = require('../../validations/requestsParams/category');

const createCategory = async (req, res, next) => {
  const { name } = req.body;
  const { authorization: token } = req.headers;

  try {
    verifyToken(token);
    verifyFields({ name }, rules);

    const createdCategory = await Category.create({ name });

    res.status(201).json(createdCategory);
  } catch (error) {
    next(error);
  }
};

module.exports = createCategory;
