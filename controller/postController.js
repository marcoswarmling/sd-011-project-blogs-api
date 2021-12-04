const post = require('../service/postService');

const postControllerInsert = async (req, res) => {
    const { id, title, content, categoryIds } = req.body;
    const insertPost = await post.ServiceInsertPost(
        id, title, content, categoryIds,
    );
    console.log('O QUE TA VINDO', insertPost);
    if (insertPost.error === 'notFound') {
        return res.status(400).json({
            message: '"categoryIds" not found',
        });
    }
    return res.status(201).send(insertPost);
};

module.exports = {
    postControllerInsert,
};