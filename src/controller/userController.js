const service = require('../service/userService');

const createUser = async (req, res) => {
  try {
    const { email, displayName, password, image } = req.body;

    const newUser = await service.createUser(email, displayName, password, image);
    
    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createUser,
};
