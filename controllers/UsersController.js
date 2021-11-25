const UsersService = require('../services/UsersService');

const create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const add = await UsersService.create({ name, email, password, role: 'user' });
    return res.status(201).json(add);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  create,
};