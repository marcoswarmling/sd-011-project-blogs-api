async function validedName(req, res, next) {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
    return;
  }
  next();
}

module.exports = validedName;
