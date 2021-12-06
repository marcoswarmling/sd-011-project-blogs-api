const jwt = require('jsonwebtoken');

require('dotenv').config();

const { insertPostServ, getPostsServ, getPostByIdServ } = require('../services/posts');

const secret = process.env.JWT_SECRET;

async function insertPostCtrl(req, res) {
  try {
    const bodyContent = req.body;
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    const insertPost = await insertPostServ(bodyContent, decoded.data.email);
    return res.status(201).json(insertPost);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

async function getPostsCtrl(_req, res) {
  try {
    const postsData = await getPostsServ();
    return res.status(200).json(postsData);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

async function getPostByIdCtrl(req, res) {
  try {
    const { id } = req.params;
    const postIdData = await getPostByIdServ(id);
    if (postIdData === null) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(postIdData);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = { insertPostCtrl, getPostsCtrl, getPostByIdCtrl };