const userServices = require('../services/userService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

    const newUser = await userServices.createUser(displayName, email, password, image);
    console.log(newUser);
    if (!newUser.message) {
      return res.status(201).json(newUser);
    } 

      return res.status(409).json({ message: newUser.message });
};

module.exports = {
  createUser,
};
