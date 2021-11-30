const { User } = require('../services');

const createUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  try {
    const token = await User.createUser({ displayName, email, password, image });

    return res.status(201).json({ token });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createUser,
};
