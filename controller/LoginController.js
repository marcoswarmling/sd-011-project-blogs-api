const db = require('../models');
const jwtToken = require('../auth/JWTtoken');

const login = async (req, res) => {
  const { email } = req.body;
  try {
    const getUser = await db.Users.findOne({
      where: { email },
    });
    const { id, displayName } = getUser;
    const token = jwtToken({ id, displayName, email });

    return res.status(200).json(token);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = login;
