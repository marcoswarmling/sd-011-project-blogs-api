const express = require('express');
const { BlogPost } = require('../services');
const { validateJWT } = require('../schemas/userSchema');

const router = express.Router();

router.use(validateJWT);

router.post('/', async (req, res) => {
    const blogPost = req.body;
    const { message, statusCode, post } = await BlogPost.create(blogPost, req.user);
    if (message) return res.status(statusCode).json({ message });
    return res.status(statusCode).json(post);
});

module.exports = router;