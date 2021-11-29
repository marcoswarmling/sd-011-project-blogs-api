const express = require('express');
const validateToken = require('../auth/jwt');

const router = express.Router();

const blogPost = require('../services/postService');

router.post('/', validateToken, async (req, res) => {
  // try {
    const { title, content, categoryIds } = req.body;
    const newPost = await blogPost.createBlogPost(title, content, categoryIds);
    const { id } = req.user;

    if (newPost.message === '"categoryIds" not found') {
      return res.status(400).json(newPost);
    }

    if (typeof newPost.message === 'string') {
      return res.status(400).json(newPost);
    }

    res.status(201).json({
      id: newPost.id,
        userId: id,
        title: newPost.title,
        content: newPost.content,
    });
});

module.exports = router;