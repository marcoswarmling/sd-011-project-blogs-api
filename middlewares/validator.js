module.exports = (schema) => (req, res, next) => {
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).json({
      errorCause: result.error.name,
      missingParams: result.error.details[0].path,
      message: result.error.details[0].message,
    });
  }
  next();
};