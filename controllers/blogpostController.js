const Blogpost = require('../services/blogpostService');
const { BlogPost, User, Category } = require('../models');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;

    const data = await Blogpost.createPost({ title, content, categoryIds, id });
    if (data.err) {
      return res.status(data.err.code).json(data.err.message); 
    }
    return res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong. Try again later' });
  }
};

const getPosts = async (req, res) => {
  try {
    const data = await BlogPost
    .findAll({ include: [{ model: User, as: 'user' }, { model: Category, as: 'categories' }] });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong. Try again later' });
  }
};

module.exports = { createPost, getPosts };
