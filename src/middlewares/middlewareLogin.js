function checkEmailLogin(req, res, next) {
  const { email } = req.body;
  if (email === '') {
    res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  if (!email) {
    res.status(400).json({ message: '"email" is required' });
  }

  next();
}

function checkPasswordLogin(req, res, next) {
  const { password } = req.body;
  if (password === '') {
    res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  if (!password) {
    res.status(400).json({ message: '"password" is required' });
  }
  next();
}

module.exports = { checkEmailLogin, checkPasswordLogin };
