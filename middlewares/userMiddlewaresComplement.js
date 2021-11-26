module.exports = (err, _req, res, _next) => {
  if (err.code === 'invalidName') {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  if (err.code === 'missingAuthToken') {
    return res.status(401).json({ message: 'Token not found' });
  }
  if (err.code === 'invalidId') {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(500).json({ 
    message: 'critical error :(',
  });
};
