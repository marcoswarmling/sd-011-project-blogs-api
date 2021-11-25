const validateDisplayName = (displayName) => {
  if (displayName.length < 8) return true;
  return false;
};

const validateEmail = (email) => {
  const validEmail = /^[A-Za-z0-9._]+@([A-Za-z]+\.)[A-Za-z]{2,3}(\.[A-Za-z]{2})?$/;
  return validEmail.test(email);
};

const validatePassword = (password) => {
  if (password.length < 6) return true;
  return false;
};

const validateEntries = ({ displayName, email, password }) => {
  if (!password) return '"password" is required';
  if (!displayName) return '"displayName" is required';
  if (!email) return '"email" is required';
  return false;
};

const validateParamsEntries = ({ displayName, email, password }) => {
  if (validateDisplayName(displayName)) {
    return '"displayName" length must be at least 8 characters long';
  }

  if (!validateEmail(email)) {
    return '"email" must be a valid email';
  }

  if (validatePassword(password)) {
    return '"password" length must be 6 characters long';
  }
};

const paramsValidation = async (req, res, next) => {
  try {
    const { displayName, email, password } = req.body;
    const responseValidateEntries = validateEntries({ displayName, email, password });
    
    if (responseValidateEntries) {
      return res.status(400).json({ message: responseValidateEntries });
    }

    const responseValidateParamsEntries = validateParamsEntries({ displayName, email, password });

    if (responseValidateParamsEntries) {
      return res.status(400).json({ message: responseValidateParamsEntries });
    }
    
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { paramsValidation };