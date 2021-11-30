const PostServices = require('../services/postServices');

const create = async (req, res) => {
  const { title, content } = req.body;
  const { userId } = req;
  
  const { dataValues } = await PostServices.create({ title, content, userId });
  
  delete dataValues.updated;
  delete dataValues.published;

  res.status(201).json(dataValues);
};

module.exports = {
  create,
};
