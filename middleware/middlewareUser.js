function checkName(req, res, next) {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({
      displayName: 'length must be at least 8 characters long',
    });
  }

  next();
}

function checkEmail(req, res, next) {
  const { email } = req.body;
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;

  if (!regex.test(email)) {
    return res.status(400).json({
      email: 'must be a valid email',
    });
  }
  next();
}

function checkPassword(req, res, next) {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400).json({
      password: 'length must be 6 characters long',
    });
  }
  next();
}

module.exports = {
  checkName,
  checkEmail,
  checkPassword,
};
