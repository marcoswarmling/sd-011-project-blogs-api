const Joi = require('joi');

const schemaPosts = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

const validBlogPost = (req, res, next) => {
  try {
    const post = req.body;
    const { error } = schemaPosts.validate(post);

    if (error) {
      return res.status(400).json({ message: error.message });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  validBlogPost,
};