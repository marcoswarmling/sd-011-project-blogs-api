const { create } = require('../services/UserService');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const response = await create(displayName, email, password, image);
    if (response.message) return res.status(response.status).json({ message: response.message });
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'server error' });
  }
};

module.exports = {
  createUser,
};
