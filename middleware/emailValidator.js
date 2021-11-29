function validedEmail(req, res, next) {
  if (!req.body.email) {
    res.status(400).json({ message: '"email" is required' });
    return;
  }
  const regexEmail = /[a-zA-Z0-9_]+@+[a-zA-Z0-9_]+.com/;
  const testeRegex = regexEmail.test(req.body.email);
  if (!testeRegex) {
    res.status(400).json({ message:'"email" must be a valid email' });
    return;
  }

  next();
}

module.exports = validedEmail;
