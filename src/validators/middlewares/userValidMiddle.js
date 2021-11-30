const userValidator = require('../notMiddleware/userValid');

module.exports = async (req, res, next) => {
  const { displayName: name, email, password } = req.body;
  
  const nameResult = userValidator.nameValidator(name);
  if (nameResult.status) { 
    return res.status(nameResult.status).json({ message: nameResult.message });
  }

  const emailResult = await userValidator.emailValidator(email);
  if (emailResult.status) { 
    return res.status(emailResult.status).json({ message: emailResult.message });
  }
  
  const passwordlResult = userValidator.passwordValidator(password);
  if (passwordlResult.status) { 
    return res.status(passwordlResult.status).json({ message: passwordlResult.message });
  }

  next();
};