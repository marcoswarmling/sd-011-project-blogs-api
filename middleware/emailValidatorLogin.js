function validedEmailLogin(req, res, next) {
  const { email } = req.body;
  if (email === '') {
    res.status(400).json({ message: '"email" is not allowed to be empty' });
    return;
  }
  if (!email) {
    res.status(400).json({ message: '"email" is required' });
    return;
  }
  const regexEmail = /[a-zA-Z0-9_]+@+[a-zA-Z0-9_]+.com/;
  const testeRegex = regexEmail.test(email);
  if (!testeRegex) {
    res.status(400).json({ message: '"email" is required' });
    return;
  }

  next();
}

module.exports = validedEmailLogin;
