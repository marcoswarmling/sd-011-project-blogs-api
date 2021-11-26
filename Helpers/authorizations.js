// const jwt = require('jsonwebtoken');
// const { status } = require('../Helpers/status&messages');
/* 
const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(status.unauth).json({ message: authMessages.missingToken });
    const decoded = jwt.verify(token, segredo);
    if (!decoded) return res.status(status.unauth).json({ message: authMessages.jwt });
    const userDB = await usersModel.findByEmail(decoded.email);
    req.user = userDB;
    next();
  } catch (error) { return res.status(status.unauth).json({ message: authMessages.jwt }); }
}; */

module.exports = { /* verifyToken, */ };
