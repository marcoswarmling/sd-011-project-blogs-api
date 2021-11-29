function validedPasswordLogin(req, res, next) {
  const { password } = req.body;
  if (password === "") {
    res.status(400).json({ message: '"password" is not allowed to be empty'});
    return;
  }
  if (!password) {
    res.status(400).json({ message: "\"password\" is required"});
    return;
  }

  next();
}

module.exports = validedPasswordLogin;
