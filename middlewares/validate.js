const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({
       message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i; 

  if (!email || email === '') {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (!email || !regex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || password === '') {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

const validatePasswordLogin = async (req, res, next) => {
  const { email, password } = req.body;
  
  if (email === '') return res.status(400).json({ message: '"email" is not allowed to be empty' });
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  if (!email) return res.status(400).json({ message: '"email" is required' });
  if (!password) return res.status(400).json({ message: '"password" is required' });
  next();
  }; 

module.exports = { validateDisplayName, validateEmail, validatePassword, validatePasswordLogin };
