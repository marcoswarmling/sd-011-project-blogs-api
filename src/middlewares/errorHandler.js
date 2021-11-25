module.exports = (error, _req, res, _next) => {
  const { isJoi, code, message } = error;

  if (isJoi) {
    return res.status(400).json({ message });
  }

  if (code && message) {
    return res.status(code).json({ message });
  }

  res.status(500).json({ message: 'Oops. Something happened to our servers. Try again later' });
};