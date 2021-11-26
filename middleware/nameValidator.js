async function validedName(req, res, next) {
  const { name } = req.body;
  if (name.length < 8) {
    res.status(422).json({
        message: '"name" length must be at least 8 characters long',
    });
    return;
  }
  next();
}

module.exports = { validedName };
