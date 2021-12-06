const jwt = require('jsonwebtoken');
require('dotenv').config();

const { insertPostServ, getPostsServ } = require('../services/posts');
// const { getUserById } = require('../services/user');

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
    return res.status(500).json({ error: 'error' });
  }
}

// a funçao abaixo ainda está em teste.
async function getPostsCtrl(_req, res) {
  try {
    const postsData = await getPostsServ();
    return res.status(200).json(postsData);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = { insertPostCtrl, getPostsCtrl };