module.exports = (err, _req, res, _next) => {
  // console.log(err);
  if (err.isJoi) return res.status(400).json({ message: err.details[0].message });

  if (err.code === 'missingAuthToken') {
    return res.status(401).json({ message: 'Token not found' });
  }
};
