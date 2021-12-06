const userService = require('../services/userService');

const createUser = async (req, res) => {
  const userData = req.body;
  try {
    const insertData = await userService.createUser(userData);
    if (insertData.err) return res.status(insertData.err.code).json(insertData.err);
    return res.status(201).json(insertData);
  } catch (error) {
    res.status(500).json({ err: { code: 500, message: 'Internal server error' } });
  }
};

module.exports = {
  createUser,
};
