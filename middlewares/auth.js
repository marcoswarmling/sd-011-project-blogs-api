// const jwt = require('jsonwebtoken');

// const { UNAUTHORIZED } = require('../utils/statusError');
// const { TOKEN_NOT_FOUND, INVALID_TOKEN } = require('../utils/errorMessages');

// require('dotenv').config();

// const secret = process.env.JWT_SECRET;

// const auth = async (req, res, next) => {
//   const token = req.headers.authorization;
  
//   try {
//     if (!token) {
//       return res.status(UNAUTHORIZED).json({ message: TOKEN_NOT_FOUND });
//     }
//     const decoded = jwt.verify(token, secret);

//     const user = await model.getUserByEmail(decoded.email);

//     if (!user) {
//       return res.status(UNAUTHORIZED).json(INVALID_TOKEN);
//     }
//     req.user = user;
//     next();
//   } catch (err) {
//     return res.status(UNAUTHORIZED).json(INVALID_TOKEN);
//   }
// };

// module.exports = { auth };