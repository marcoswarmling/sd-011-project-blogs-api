require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;   

const validateJWT = (req, res, next) => {
  // Pego o token gerado do usuãrio
  const token = req.headers.authorization;
  console.log('tokenValidation', token);

  // Se não encontrar o token, retorna a mensagem de erro, especificamente não encontrou o token
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  } 

  try {
    // valida o jwt (verify)
    const decoded = jwt.verify(token, secret);
    console.log('decoded', decoded);

    // deixa o usuário disponível ao colocá-lo em req
    req.user = decoded;

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateJWT }; 