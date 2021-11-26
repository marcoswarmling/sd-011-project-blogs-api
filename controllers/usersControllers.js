const usersServices = require('../services/usersServices');

const createUsers = async (req, res) => {
 // console.log('ENTROU NO CONTROLLER');
  const { displayName, email, password, image } = req.body;
  try {
   // console.log('ENTROU NO TRY');
    const token = await usersServices.createUsers(displayName, email, password, image);
    // console.log(token, 'TOKEN');
    if (token.msgError) {
      return res.status(409).json({ message: 'User already registered' });
    }
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor' });
  }
};

module.exports = {
  createUsers,
};