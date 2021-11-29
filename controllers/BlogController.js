const {
  blogPostValidate,
} = require('../services/blogServices');

const createBlogPost = async (req, res) => {
  try {
    const { title, categoryIds, content } = req.body;
    const newPost = await blogPostValidate({ title, categoryIds, content }, req.userId);
    console.log(newPost);
    if (newPost.message) {
      return res.status(400).json(newPost);
    }
    return res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: 'Something is wrong' });
  }
};

module.exports = {
  createBlogPost,
};