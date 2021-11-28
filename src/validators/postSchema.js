const Joi = require('joi');

const postSchema = Joi.object().keys({
  title: Joi.string().required().messages({
        'string.empty': 'title cannot be empty',
    'any.required': '"title" is required',
    
  }),
  content: Joi.string().required().messages({
    'string.empty': 'content cannot be empty',
    'any.required': '"content" is required',
 
  }),

  categoryIds: Joi.array().items(Joi.number().integer()).required().messages({
    'array.includes': '"categoryIds" must be an array of numbers',
    'array.includes.single': '"categoryIds" must be an array of numbers',
    'array.includes.multiple': '"categoryIds" must be an array of numbers',
    'any.required': '"categoryIds" is required',
    }),
 
});

module.exports = { postSchema };
