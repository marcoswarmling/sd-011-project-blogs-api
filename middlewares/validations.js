const {
  DISPLAY_NAME,
  EMAIL,
  EMAIL_REQ,
  PASSWORD_REQ,
  PASSWORD,
  // USER,
  // EMAIL_EMPTY,
} = require('../utils/errorMessages');

const { BAD_REQUEST /* CONFLICT */ } = require('../utils/statusError');

const isValidDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  
  if (displayName.length < 8) return res.status(BAD_REQUEST).json(DISPLAY_NAME);
  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;

  const re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i;

  if (!email || email === '') return res.status(BAD_REQUEST).json(EMAIL_REQ);
  if (!re.test(email)) return res.status(BAD_REQUEST).json(EMAIL);
  next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;
  
  if (!password || password === '') return res.status(BAD_REQUEST).json(PASSWORD_REQ);
  if (password.length !== 6) return res.status(BAD_REQUEST).json(PASSWORD);
  next();
};

// const userExists = async (req, res, next) => {
//   const { email } = req.body;

//   // constante que traz a info de email do banco para comparação;
//   if (result) return res.status(CONFLICT).json(USER);
//   next();
// };

// const isValidLoginUser = async (req, res, next) => {
//   const { email, password } = req.body;

//   // constante que traz a info do user do banco para comparação;
//   if (!user || password !== user.password) {
//     return res.status(BAD_REQUEST).json({ message: 'Campos Inválidos' });
//   }
//   if (!email || email === '') return res.status(BAD_REQUEST).json(EMAIL_EMPTY);
//   if (!password || password === '') return res.status(BAD_REQUEST).json()
//   next();
// };

module.exports = {
  isValidDisplayName,
  isValidEmail,
  isValidPassword,
  // userExists,
  // isValidLoginUser,
};