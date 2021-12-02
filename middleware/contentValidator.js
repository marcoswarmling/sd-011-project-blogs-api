async function validedContent(req, res, next) {
  const { content } = req.body;
  if (!content) {
    res.status(400).json({
      message: '"content" is required',
    });
    return;
  }
  next();
}

module.exports = validedContent;
