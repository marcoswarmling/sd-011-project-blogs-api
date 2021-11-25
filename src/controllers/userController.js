const userService = require('../services/userService');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
  
    const insert = await userService.create({ displayName, email, password, image });
    console.log('controller');
  
    return res.status(insert.statusCode).json(insert.responseMessage);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  create,
};
