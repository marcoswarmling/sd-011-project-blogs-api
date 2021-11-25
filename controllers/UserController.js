const UserService = require('../services/UserService');

const create = async (req, res) => {
  // console.log('teste');
  try {
    // console.log('REQ BODY ', req.body);
    const { displayName, email, password, image } = req.body;
    const add = await UserService.createNewUser(displayName, email, password, image);
    
    return res.status(201).json(add);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  create,
};