function validedPassword(req, res, next) {
  const { password } = req.body;
  if (!password) {
    res.status(400).json({ message: '"password" is required' });
    return;
  }
  if (password.length < 6) {
    res.status(400).json({
      message: '"password" length must be 6 characters long',
    });
    return;
  }
  next();
}

module.exports = validedPassword;
