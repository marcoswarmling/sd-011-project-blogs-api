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
  const postsData = await getPostsServ();
  const postsDataArray = postsData.dataValues;
  // const { userId } = postsDataArray;
  // const usersData = await getUserById(userId);
  // const userDataId = usersData.dataValues;
  // const { id, displayName, email, image } = userDataId;
  // const user = { id, displayName, email, image };
  // const postCategories = 
  console.log(postsDataArray);
  // const cheat = [{
  //   id: 1,
  //   title: 'Post do Ano',
  //   content: 'Melhor post do ano',
  //   published: '2011-08-01T19:58:00.000Z',
  //   updated: '2011-08-01T19:58:51.000Z',
  //   user: {
  //     id: 1,
  //     displayName: 'Lewis Hamilton',
  //     email: 'lewishamilton@gmail.com',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
  //   },
  //   categories: [{
  //     id: 1,
  //     name: 'Inovação',
  //   }] },
  // ];
  return res.status(200).json('teste');
}

module.exports = { insertPostCtrl, getPostsCtrl };