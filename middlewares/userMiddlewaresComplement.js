module.exports = (err, _req, res, _next) => {
  if (err.code === 'invalidName') {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  if (err.code === 'missingAuthToken') {
    return res.status(401).json({ message: 'Token not found' });
  }

  return res.status(500).json({ 
    message: 'critical error :(',
  });
};
