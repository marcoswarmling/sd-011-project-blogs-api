const express = require("express");
const { BlogPost } = require("../models");
const router = express.Router();

const validateToken = require("../middlewares/validateToken");
const validateBlogPostSchema = require("../middlewares/validateBlogPostSchema");
router.post("/", validateToken, validateBlogPostSchema, async (req, res) => {
  const { title, content } = req.body;
  const { userId } = req;
  console.log(req.userId);
  try { 
    const newPost = await BlogPost.create({ title, content, userId });
    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
