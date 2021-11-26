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
};
