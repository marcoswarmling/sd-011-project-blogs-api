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

const controllerDeletePost = async (req, res) => {
    const { idPost } = req.params;
    const { id } = req.body;

    const deletePost = await post.serviceDeleteId(idPost, id);
    if (deletePost === 'NOTFOUND') {
        return res.status(404).json({
            message: 'Post does not exist',
        });
    }
    if (deletePost.error === 'Diferent User') {
        return res.status(401).json({
            message: 'Unauthorized user',
        });
    }
    return res.status(204).send(deletePost);
};

module.exports = {
    postControllerInsert,
    controllerDeletePost,
};