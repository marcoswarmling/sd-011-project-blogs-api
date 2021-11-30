const jwt = require('jsonwebtoken');
const UserService = require('../services/UserService');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await UserService.createNewUser(displayName, email, password, image);

    // const getUser = User.findOne({ where: { email } });
    // console.log(getUser.id);

    const token = jwt.sign({ displayName, email, id: user.id }, secret, jwtConfig);
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body; 
    const token = await UserService.login(email, password);

    return res.status(200).json({ token });
  } catch (error) {
    return error.message;
  }  
};

const getAll = async (req, res) => {
  try {
    const data = await UserService.getAll();
    
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    if (token.length < 15) return res.status(401).json({ message: 'Expired or invalid token' });

    return res.status(200).json(data);
  } catch (error) {
    return error.message;
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.getById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });

  const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    if (token.length < 15) return res.status(401).json({ message: 'Expired or invalid token' });

  return res.status(200).json(user);
};

module.exports = {
  create,
  login,
  getAll,
  getById,
}; 