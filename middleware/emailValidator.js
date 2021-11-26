function validedEmail(req, res, next) {
  if (!req.body.email) {
    res.status(401).json({ message: 'All fields must be filled' });
    return;
  }
  const regexEmail = /[a-zA-Z0-9_]+@+[a-zA-Z0-9_]+.com/;
  const testeRegex = regexEmail.test(req.body.email);
  if (!testeRegex) {
    res.status(401).json({ message: 'All fields must be filled' });
    return;
  }

  next();
}


module.exports = { validedEmail };