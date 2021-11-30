const createToken = require('../helpers/createToken');
const Users = require('../services/Users');

const create = async (req, res) => {
  try {
    const { email, password, displayName, image } = req.body;
    
    const { user, code, message } = await Users.create({ email, password, displayName, image });
  
    if (!user) return res.status(code).json({ message });
    
    const token = createToken(user);

    res.status(code).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const { user, code, message } = await Users.login({ email, password });
  
    if (!user) return res.status(code).json({ message });
    
    const token = createToken(user);

    res.status(code).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await Users.getAll();
  
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message, user } = await Users.getById(id);
    
    if (!user) return res.status(code).json({ message });

    res.status(code).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  login,
  getAll,
  getById,
};