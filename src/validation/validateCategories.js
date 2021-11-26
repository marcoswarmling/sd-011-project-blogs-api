const validateEntries = ({ name }) => {
  if (!name) return '"name" is required';
  return false;
};

const paramsValidation = async (req, res, next) => {
  try {
    const { name } = req.body;
    const responseValidateEntries = validateEntries({ name });
    
    if (responseValidateEntries) {
      return res.status(400).json({ message: responseValidateEntries });
    }
    
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { paramsValidation };