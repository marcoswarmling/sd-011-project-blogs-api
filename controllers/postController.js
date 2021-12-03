const postService = require('../services/postService');

async function postCreate(req, res) {
  const { body } = req;
  const { data } = req.token;
  const post = await postService.postCreate(body, data);

  return res.status(201).json(post);
}

// async function getAllpost(req, res) {
//   const post = await postSevice.getAllpost();

//   return res.status(200).json(post);
// }

// // async function findOne(req, res) {
// //   const { email, password } = req.body;
// //   const postToken = await postSevice.findOne(email, password);

// //   return res.status(200).json({ token: postToken });
// // }

// // async function getpost(req, res) {
// //   const { id } = req.params;
// //   const post = await postSevice.getpost(id);

// //   return res.status(200).json(post);
// // }

module.exports = {
  postCreate,
};
