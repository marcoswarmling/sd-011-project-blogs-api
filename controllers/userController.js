const UserService = require('../services/userService');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    
    const newUser = await UserService.create({ displayName, email, password, image });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

module.exports = {
  create,
}; 