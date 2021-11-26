function checkfildEmail(req, res, next) {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      email: 'is required',
    });
  }
  next();
}

function checkfildPassword(req, res, next) {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({
      password: 'is required',
    });
  }
  next();
}

module.exports = {
  checkfildEmail,
  checkfildPassword,
};
