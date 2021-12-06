const { Users } = require('../models');
const { createNewToken } = require('../auth/createJWT');

const UserGenerateToken = async (req, res) => {
const { email, password } = req.body;
const user = await Users.findOne({ where: { email, password } });
const token = await createNewToken(user);
res.status(200).json({ token });
};

module.exports = {
    UserGenerateToken,
};