const { create } = require('../services/PostService');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { user } = req;
    const response = await create(title, content, categoryIds, user.id);
    if (response.message) return res.status(response.status).json({ message: response.message });
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'server error' });
  }
};

// const deletePost = (req, res) => {
//   try {
//     const { id } = req.params;
    
//   } catch (error) {
    
//   }
// };

module.exports = {
  createPost,
  // deletePost,
};
