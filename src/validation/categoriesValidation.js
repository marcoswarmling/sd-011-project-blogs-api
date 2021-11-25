const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().required(), 
});

const validReqCategories = (req, res, next) => {
  try {
    const category = req.body;
    const { error } = schema.validate(category);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { validReqCategories };
