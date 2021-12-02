const { postValid } = require('../schemas/postSchema');
const { BlogPost, Category } = require('../models');

const create = async (body, user) => {
    const { title, content, categoryIds } = body;
    const { id } = user;
    const validations = postValid(title, content, categoryIds);
    if (validations.message) return validations;
    const categoryExists = await Category.findOne({ where: { id: categoryIds } });
    if (!categoryExists) return { statusCode: 400, message: '"categoryIds" not found' };
    const post = await BlogPost.create({ title, content, userId: id });
    return { statusCode: 201, post };
};

module.exports = {
    create,
};