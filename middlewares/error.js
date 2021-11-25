module.exports = (err, _req, res, _next) => {
  const { code, message } = err;
  
  const codeDictionaryError = {
    invalidDisplayName: 400,
    invalidEmail: 400,
    emptyEmail: 400,
    emailExists: 409, 
    emailLoginIsEmpty: 400,
    invalidPassword: 400,
    emptyPassword: 400,
    passwordLoginIsEmpty: 400,
    invalidLogin: 400,
    noToken: 401,
    jwtMalformed: 401,
  };

  if (err.code) {
    return res.status(codeDictionaryError[code]).json({ message });
  }

  return res.status(500).json(err);
};
