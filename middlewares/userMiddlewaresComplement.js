module.exports = (err, _req, res, _next) => {
  switch (err) {
    case err.code === 'invalidName':
      return res.status(400).json({ 
        message: 'displayName length must be at least 8 characters long',
      });
    default:
      return res.status(500).json({ 
        message: 'critical error :(',
      });
  }
};
