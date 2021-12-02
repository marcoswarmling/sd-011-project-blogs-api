const { postValid } = require('../schemas/postSchema');
const { BlogPost, Category, PostCategory } = require('../models');

const create = async (body, user) => {
    const { title, content, categoryIds } = body;
    const { id } = user;

    const validations = postValid(title, content, categoryIds);
    if (validations.message) return validations;

    const categoryExists = await Category.findOne({ where: { id: categoryIds } });

    if (!categoryExists) return { statusCode: 400, message: '"categoryIds" not found' };

    const post = await BlogPost.create({ title, content, userId: id });
    await categoryIds.map(async (catId) => {
        await PostCategory.create({ postId: post.id, categoryId: catId });
    });
    return { statusCode: 201, post };
};

const getAll = async () => {
    const resultData = await BlogPost.findAll({ include: [{ all: true }] });
    const result = resultData.map((i) => i.dataValues);
    console.log(result);
    return result;
};

module.exports = {
    create,
    getAll,
};