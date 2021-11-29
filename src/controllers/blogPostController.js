const { BlogPosts, Categories, Users } = require('../models');
const { tokenJwtIsValid } = require('../auth/validateJWT');

const postRegistration = async (req, res) => {
    const { title, content } = req.body;
    const token = req.headers.authorization;
    const { id } = await tokenJwtIsValid(token).data;
    console.log(id);
    const newPost = await BlogPosts.create({
      title,
      content,
      userId: id,
    });
      return res.status(201).json(newPost);
};

const getAllPosts = async (_req, res) => {
    const posts = await BlogPosts.findAll({ 
        include: [{ model: Users, as: 'user', attributes: { exclude: ['password'] } }, 
          { model: Categories, as: 'categories', through: { attributes: [] } },
        ],
      });
    return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
 const { id } = req.params;
    const posts = await BlogPosts.findAll({ where: { id },
        include: [{ model: Users, as: 'user', attributes: { exclude: ['password'] } }, 
          { model: Categories, as: 'categories', through: { attributes: [] } },
        ],
      });
    return res.status(200).json(posts[0]);
};

const postUpdate = async (req) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const posts = await BlogPosts.update({ title, content }, { where: { id } });
    return posts;
};

const getPostUpdate = async (req, res) => {
    const { id } = req.params;
    await postUpdate(req);
    const posts = await BlogPosts.findAll({ where: { id },
        include: [{ model: Users, as: 'user', attributes: { exclude: ['password'] } }, 
          { model: Categories, as: 'categories', through: { attributes: [] } },
        ],
      });
    return res.status(200).json(posts[0]);
};

module.exports = {
    postRegistration,
    getAllPosts,
    getPostById,
    getPostUpdate,
};