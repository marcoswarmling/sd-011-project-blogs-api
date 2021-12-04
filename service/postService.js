const { BlogPosts, PostsCategories } = require('../models');

const ServiceInsertPost = async (id, title, content, categoryIds) => {
    try {
        const findPost = await PostsCategories.findAll({ raw: true });
        const verifyIdsEqueal = (findPost.length === categoryIds.length) 
        && categoryIds.every((element, index) => element === categoryIds[index]);
        if (!verifyIdsEqueal) {
            return { error: 'notFound' };
        }
        const insert = await BlogPosts.create({ userId: id, title, content });
        return insert;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    ServiceInsertPost,
};