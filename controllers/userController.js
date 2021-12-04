const userService = require('../services/userSevice');

const ERROR_MESSAGE = {
  message: 'Internal Server Error',
};

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const user = await userService
    .createUser(displayName, email, password, image);
    
    if (!user.displayName) {
      return res
        .status(409)
        .json(user);
    }

    res
      .status(201)
      .json({ user });
  } catch (error) {
    res
      .status(500)
      .json(ERROR_MESSAGE);
  } 
};

module.exports = {
  createUser,
};
