const { BlogPosts, Categories } = require('../models');

const ServiceInsertPost = async (id, title, content, categoryIds) => {
    const userId = id;
    try {
        const findPost = await Categories.findAll({ raw: true });
        const ids = findPost.map((i) => i.id);
        const verifyIdsEqueal = categoryIds
        .every((element) => ids.includes(element));
        console.log('VERIFY', verifyIdsEqueal);
        if (!verifyIdsEqueal) { 
            return { error: 'notFound' };
        }
        const insert = await BlogPosts.create({ userId, title, content });
        return insert;
    } catch (error) {
        console.log(error);
    }
};

const serviceDeleteId = async (idPost, id) => {
    try {
        const findId = await BlogPosts.findByPk(idPost);

    if (!findId) {
        return 'NOTFOUND';
    }
    if (findId.userId !== id) {
        return { error: 'Diferent User' };
    }
    return findId.destroy();
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    ServiceInsertPost,
    serviceDeleteId,
};