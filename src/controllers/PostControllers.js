const PostServices = require('../services/PostServices');

module.exports = {
  create: async (req, res, next) => {
    try {
      const { title, content, categoryIds } = req.body;
      const { userId } = req.user;
  
      const { post, error } = await PostServices.create({ title, content, categoryIds, userId });
  
      if (error) return next(error);
  
      return res.status(201).json(post);
    } catch (error) {
      return next(error);
    }
  },
  index: async (_req, res, next) => {
    try {
      const { posts, error } = await PostServices.index();

      if (error) return next(error);

      return res.status(200).json(posts);
    } catch (error) {
      return next(error);
    }
  },
  getPostById: async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const { post, error } = await PostServices.getPostById(id);
  
      if (error) return next(error);

      return res.status(200).json(post);
    } catch (error) {
      return next(error);
    }
  },
};
