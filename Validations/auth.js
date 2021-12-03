const jwt = require('jsonwebtoken'); // require para funcionar o JWT
require('dotenv').config();
const { getUserEmailCtrl } = require('../Controllers/user');

const secret = process.env.JWT_SECRET; // secret para descriptografar. Obs: ja que a criptografia usa HS256 para criptografar/descriptografar então a mesma chave de segurança será usada pra ccriptografar e descriptografar.

module.exports = async (req, res, next) => {
  const token = req.headers.authorization; // o token enviado como header na requisição de post estará em req.headers.authorization (obs: authorization foi o nome dado na requisição pelo insomnia)
    if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  } // verifica se na req.headers.authorization retorna algo. Se nao, retorna erro token not found
  
  try {
    const decoded = jwt.verify(token, secret); // para descriptografar utiliza-se o jwt.verify passando token e secret e portanto recebo como resposta o data contendo id name e mail e role e tambem caracteristicas como iat e exp.
    req.user = decoded; // por nao conseguir acessar diretamente da variavel decoded o email e consultá-lo no banco de dados, igualo req.user a decoded para então consultá-lo no banco de dados.
    console.log(decoded);
    const user = await getUserEmailCtrl(decoded.data.email); // faz-se a consulta no banco de dados para verificar se o e-mail existe.

    if (!user) {
      return res
        .status(404)
        .json({ message: 'User does not exist' });
    } // se o user não existir(for vazio), retorna-se então um erro. Se existir vai pro next(), chamando outra função.

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  } // caso ocorra algum erro de servidor o erro aparecerá na tela
};