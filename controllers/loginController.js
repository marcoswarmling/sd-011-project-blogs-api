const db = require('../models');
const jwtToken = require('../authorization/jwtToken');

const loginUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await db.Users.findOne({
      where: { email },
    });
    const { id, displayName, image } = user;
    const token = jwtToken({ id, displayName, email, image });
    return res.status(200).json(token);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  loginUser,
};