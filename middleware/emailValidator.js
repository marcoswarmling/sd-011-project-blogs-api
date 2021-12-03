const { Users } = require('../models');

async function validedEmail(req, res, next) {
  const {email} = req.body
  if (!email) {
    res.status(400).json({ message: '"email" is required' });
    return;
  }
  const findEmail = await Users.findOne({where: {email: email}})
  if(findEmail){
    return res.status(409).json({ message: 'User already registered' });
  }

  const regexEmail = /[a-zA-Z0-9_]+@+[a-zA-Z0-9_]+.com/;
  const testeRegex = regexEmail.test(email);
  if (!testeRegex) {
    res.status(400).json({ message: '"email" must be a valid email' });
    return;
  }

  next();
}

module.exports = validedEmail;
