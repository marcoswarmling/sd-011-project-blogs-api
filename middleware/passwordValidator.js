function validedPassword(req, res, next) {
  if (!req.body.password) {
    res.status(401).json({ message: 'All fields must be filled' });
    return;
  }
  if (req.body.password.length < 6) {
    res.status(422).json({
      message: '"name" length must be at least 6 characters long',
    });
  }
  next();
}

module.exports = { validedPassword };
