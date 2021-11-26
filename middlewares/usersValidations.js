const isValidDisplayName = async (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const isValidEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
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
  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

module.exports = {
  isValidDisplayName,
  isValidEmail,
  existPassword,
  validationEmail,
  charactersOfPassword,
};
