const status = require('../schemas/errorCodes');
const errors = require('../schemas/errorMessage');
const { createPost, getAll, getById } = require('../services/postService');

  const postcreate = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    
    try {
      const create = await createPost(title, content, categoryIds);
      
      if (create) return res.status(status.created).json(create);
    } catch (error) {
      const { statusCode, message } = errors.blogPost.Error;
      
      return res.status(statusCode).json({ message });
    }
  };

  const getPosts = async (_req, res) => {
    try {
      const listPosts = await getAll();
      
      if (listPosts) return res.status(status.ok).json(listPosts);
    } catch (error) {
      const { statusCode, message } = errors.blogPost.Error;
      
      return res.status(statusCode).json({ message });
    }
  };

  const getPostId = async (req, res) => {
    const { id } = req.params;
    const listPostId = await getById(id);

    if (listPostId) return res.status(status.ok).json(listPostId);   
  
    const { statusCode, message } = errors.blogPost.postNotExist; 
    
    return res.status(statusCode).json({ message });
  };

module.exports = {
  postcreate,
  getPosts,
  getPostId,
};