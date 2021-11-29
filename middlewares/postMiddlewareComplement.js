module.exports = (err, _req, res, _next) => {
  if (err.isJoi) return res.status(401).json({ message: err.details[0].message });
  if (err.code === 'postNotPertence') return res.status(401).json({ message: 'Unauthorized user' });
  if (err.code === 'categoryIsNotEdited') {
    return res.status(400).json({ message: 'Categories cannot be edited' });
  }
  return res.status(500).json({ 
    message: 'critical error :(',
  });
};
