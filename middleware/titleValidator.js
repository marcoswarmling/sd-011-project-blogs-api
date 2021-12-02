async function validedTitle(req, res, next) {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({
      message: '"title" is required',
    });
    return;
  }
  next();
}

module.exports = validedTitle;