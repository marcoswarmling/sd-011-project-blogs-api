const postServices = require('../Services/blogPosts');

const createPost = async (request, response) => {
  const post = await postServices.createPost(request.body);
  if (post === 'category not found') {
    return response.status(400).json({ message: '"categoryIds" not found' });
  }
  return response.status(201).json(post);
};

module.exports = {
  createPost,
}; 