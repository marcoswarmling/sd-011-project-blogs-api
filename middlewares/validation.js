const Joi = require('joi');

// não estava conseguindo validar a senha, sugeriram (Gustavao) utilizar o habpi/joi para customizar a msg --> https://medium.com/@itskumarkrishna/custom-error-message-using-joi-b9a713b23b8f. Ao pesquisar o erro no slack identifiquei que o length corrigiria a mensagem 'at leat'.

const validateBody = async (req, res, next) => {
  const schema = Joi.object().keys({
    displayName: Joi.string().min(8),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
    image: Joi.string(),
  }).validate(req.body);

  if (schema.error) {
    return res.status(400).json({
      message: schema.error.details[0].message,
    }); 
  }
  return next();
};

module.exports = {
  validateBody,
};