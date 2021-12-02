const { verifyToken } = require('../../jwt');
const { BlogPost, User, Category } = require('../../models');

const listAll = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;
    verifyToken(token);

    const blogPosts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return res.status(200).json(blogPosts);
  } catch (error) {
    next(error);
  }
};

module.exports = listAll;