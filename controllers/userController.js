const userService = require('../service/userService');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await userService.createNewUser({ displayName, email, password, image });

    return res.status(user.statusCode).json(user.response);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createUser,
};