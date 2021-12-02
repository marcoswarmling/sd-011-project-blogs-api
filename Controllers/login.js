const { getUserEmailCtrl } = require('./user');
const { getToken } = require('../services/user');

function checkEmail(req, res, next) {
  const data = req.body;
  const hasEmail = 'email' in data; // verifica se existe a chave email em data. (baseado no conteúdo do site https://www.programiz.com/javascript/examples/key-exists)

  if (!hasEmail) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (!data.email) {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }

  next();
}

function checkPassword(req, res, next) {
  const data = req.body;
  const hasPassword = 'password' in data;

  if (!hasPassword) {
    return res.status(400).json({ message: '"password" is required' });
  }
  
  if (!data.password) {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }

  next();
}

async function checkUser(req, res) {
  const { email } = req.body;
  const registeredUser = await getUserEmailCtrl(email);
  if (!registeredUser) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const token = await getToken(email);
  return res.status(200).json({ token });
}

module.exports = {
  checkUser,
  checkEmail,
  checkPassword,
};
