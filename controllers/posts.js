const services = require('../services/posts');

const createNewPost = async (req, res) => {
  const { title, content } = req.body;
  const { userId } = req;

  const { dataValues } = await services.createNewPost({ title, content, userId });

  delete dataValues.updated;
  delete dataValues.published;

  return res.status(201).json(dataValues);
};

module.exports = {
  createNewPost,
};
