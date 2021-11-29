const { BlogPost } = require('../models');
require('dotenv');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.user;
    const { id } = await BlogPost.create({ title, content, categoryIds, userId });

    return res.status(201).json({ title, content, categoryIds, userId, id });
};

module.exports = {
    createPost,
};
