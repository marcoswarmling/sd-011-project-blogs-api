const { Category } = require('../models');

const create = async (body) => {
    const { name } = body;
    if (!name) return { statusCode: 400, message: '"name" is required' };
    const category = await Category.create({ name });
    return { statusCode: 201, category };
};

const getAll = async () => {
    const result = Category.findAll();
    return result;
};

module.exports = {
    create,
    getAll,
};