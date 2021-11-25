const validateEntries = ({ email, password }) => {
  if (!password) return '"password" is required';
  if (!email) return '"email" is required';
  return false;
};

const validateEmail = (email) => {
  if (email === '') return true;
  return false;
};

const validatePassword = (password) => {
  if (password === '') return true;
  return false;
};

const validateParamsEntries = ({ email, password }) => {
  if (validateEmail(email)) {
    return '"email" is not allowed to be empty';
  }

  if (validatePassword(password)) {
    return '"password" is not allowed to be empty';
  }
};

const paramsValidation = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const responseValidateParamsEntries = validateParamsEntries({ email, password });

    if (responseValidateParamsEntries) {
      return res.status(400).json({ message: responseValidateParamsEntries });
    }
    
    const responseValidateEntries = validateEntries({ email, password });
    
    if (responseValidateEntries) {
      return res.status(400).json({ message: responseValidateEntries });
    }
    
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { paramsValidation };