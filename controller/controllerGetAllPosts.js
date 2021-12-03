const serviceGetAllPosts = require('../service/serviceGetAllPosts');

const controllerGetAllPosts = async (req, res) => {
  try {
    const posts = await serviceGetAllPosts();
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ menssage: 'problema aqui: rota post' });
  }
};

module.exports = controllerGetAllPosts;