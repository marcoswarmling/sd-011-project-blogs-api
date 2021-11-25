module.exports = (err, _req, res, _next) => {
  const { code, message } = err;
  
  const codeDictionaryError = {
    invalidDisplayName: 400,
    invalidEmail: 400,
    emptyEmail: 400,
    emailExists: 409, 
    invalidPassword: 400,
    emptyPassword: 400,
  };

  if (err.code) {
    return res.status(codeDictionaryError[code]).json({ message });
  }

  return res.status(500).json(err);
};
