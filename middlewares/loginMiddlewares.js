const { Op } = require('sequelize');
const { User } = require('../models');

const validateFields = (req, res, next) => {
  const { email, password } = req.body;

  if (email === undefined) { 
    return res.status(400).json({ message: '"email" is required' });
  }

  if (password === undefined) { 
    return res.status(400).json({ message: '"password" is required' });
  }

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  if (password === '') { 
    return res.status(400)
      .json({ message: '"password" is not allowed to be empty' });
  }
  next();
};

const validateUserExists = async (req, res, next) => {
  /* Para que o sequelize retornasse o usuário buscado precisava configurar o timestamps 
  como false no model e deletar as colunas updatedAt e createdAt nas migrations. 
  Resolvi esse problema com a solução no mesmo problema, da Ana Clara Kyotoku pelo slack:
  https://trybecourse.slack.com/archives/C01PLFW7347/p1638664013027100 */
  const { email, password } = req.body;
  const user = await User.findOne(
    { where: { email: { [Op.eq]: email }, password: { [Op.eq]: password } } },
  );
   
  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  next();
};

module.exports = {
  validateFields,
  validateUserExists,
};
