const service = require('../service/userService');

const create = async (req, res) => { 
  try {
    const { displayName, email, password, image } = req.body;
    const result = await service.create(displayName, email, password, image);

    return res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { create };