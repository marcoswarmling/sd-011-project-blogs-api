module.exports = (err, _req, res, next) => {
  switch (err) {
    case err.isJoi:
      return res.status(400).json({ message: err.details[0].message });
    case err.code === 'conflict':
      return res.status(409).json({ message: 'User already registered' });
    case err.code === 'invalidEmail':
      return res.status(400).json({ message: 'email must be a valid email' });
    case err.code === 'invalidPass':
      return res.status(400).json({ message: 'password length must be 6 characters long' });
    default:
      return next(err);
  }
};
