const { BlogPost } = require('../models');

const somethingIsWrong = 'Something is wrong!';

const getAllPosts = async (_req, res) => {
  try {
    const allPosts = await BlogPost.findAll({
      include: [{ all: true }],
    });

    return res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json({ message: somethingIsWrong });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await BlogPost.findByPk(id, {
      include: [{ all: true }],
    });

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: somethingIsWrong });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
};
