const jwt = require('jsonwebtoken');

const topSecret = 'coisa';

const isValidToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({ message: 'Not Exists' });
    } 
  try {
    const payload = jwt.verify(token, topSecret);
    req.user = payload;
    console.log(payload);
    next();
  } catch (error) {
    return res.status(400).json({ message: 'jwt malformed' });
  }
};

// const authorization = async (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) {
//     return res.status(400).json({ message: 'Invalid fields' });
//   }
//   next();
// };

const isValidEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  next();
};

const ifEmailisNull = async (req, res, next) => {
  const { email } = req.body;
  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  next();
};

const validationEmail = async (req, res, next) => {
  const { email } = req.body;
  const si = /\S+@\S+\.\S+/;
  const validEmail = si.test(email);
if (!validEmail) {
    return res.status(400).json({ message: '"email" must be a valid email',
 });
  }
  next();
};

const existPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

const charactersOfPassword = (req, res, next) => {
  const { password } = req.body;
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  next();
};

module.exports = {
  isValidEmail,
  ifEmailisNull,
  existPassword,
  validationEmail,
  charactersOfPassword,
  isValidToken,
  // authorization,
};
