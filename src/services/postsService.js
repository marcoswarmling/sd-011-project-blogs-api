const { Categories, Users, BlogPosts } = require('../models');

const postUpdate = async (req) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const posts = await BlogPosts.update({ title, content }, { where: { id } });
    return posts;
};

const findAllPosts = async () => {
    const posts = await BlogPosts.findAll({
        include: [{ model: Users, as: 'user', attributes: { exclude: ['password'] } }, 
          { model: Categories, as: 'categories', through: { attributes: [] } },
        ],
      });
    return posts;
};

const findAllPostsById = async (id) => {
    const posts = await BlogPosts.findAll({ where: { id },
        include: [{ model: Users, as: 'user', attributes: { exclude: ['password'] } }, 
          { model: Categories, as: 'categories', through: { attributes: [] } },
        ],
      });
    return posts;
};

module.exports = {
    postUpdate,
    findAllPosts,
    findAllPostsById,
};