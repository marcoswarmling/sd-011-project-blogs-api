const validateUser = (body, schema) => {
  const isValid = schema.validate(body);

  if (isValid.error) {
    const detailsMessage = isValid.error.details[0].message;

    return detailsMessage;
  }

  return false;
};

const validateSchema = (schema) => (req, res, next) => {
  const error = validateUser(req.body, schema);

  if (!error) {
    return next();
  }

  return res.status(400).json({ message: error });
};

module.exports = {
  validateSchema,
};