const jwt = require('jsonwebtoken');
const { findByEmail } = require('../services/userService');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

// Fiz essa validação igual esta no corse.

module.exports = async (req, res, next) => {
  // O token gerado virá na requisição através do header Authorization em todas as rotas que quero que sejam autenticadas
  
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    // Estou passando pelo parametro de data a informação do email e do id logo em baixo para o decoded, e assim consegui verifica se os dados estão corretos.
    const existToken = await findByEmail(decoded.data.email);
    if (!existToken) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    const { id } = existToken;
    req.userData = { userId: id };
    
    console.log(req.userData);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  } 
};