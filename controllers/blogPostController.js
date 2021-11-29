const { BlogPost } = require('../models');
const { Category } = require('../models');
const { User } = require('../models');
require('dotenv');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.user;
    const { id } = await BlogPost.create({ title, content, categoryIds, userId });

    return res.status(201).json({ title, content, categoryIds, userId, id });
};

const getPosts = async (req, res) => {
    const posts = await BlogPost.findAll({
        include: [{ model: User, as: 'user' }, 
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });
    return res.status(200).json(posts);
};

module.exports = {
    createPost,
    getPosts,
};
