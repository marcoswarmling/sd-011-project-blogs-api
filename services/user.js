const jwt = require('jsonwebtoken');
const { Users } = require('../models'); // A IsaKoga me ajudou aqui. NÃO posso fazer o require de ../models/user porque se nao eu desestruturo USER do código de lá. Porém quando faço só usando ../models eu pego o users como função e é onde realmente o sequelize funciona. Para saber as funçoes e tudo que o sequelize pode fazer eu posso dar um console log de ../models.(no caso eu faço const index = require('../models') e dou um console.log nele. Ai vao aparecer mtaaaas funçoes que o seequelize tem)

require('dotenv').config();

const secret = process.env.JWT_SECRET;

async function getToken(email) {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  }; // sao configurações de tempo de expiração e portanto deposi desse tempo será necessaria outra validação. E qual algoritmo utilizado (isso é um metodo de signing simetrico, ou seja HS256 é o algoritmo de criptografia que será utilizado para criptografar a assinatura.

  const userData = { email }; // cria-se uma variavel para armazenar o  dsiplayName e email, pois esses são os dados que posteriormente deverão ser resgatados na descriptografia.

  const token = jwt.sign({ data: userData }, secret, jwtConfig); // jwt usa as informações de data, secret e jwtconfig para criar um token e o atribui-lo a uma variavel. Esse token contem headers, payload e signature (que é a junção de headers e payload numa criptografia diferente)
  return token; // esse token é entao retornado
}

async function getUserEmailServ(email) {
  const registeredUser = await Users.findOne({ where: { email } });
  return registeredUser;
}

async function insertUserServ(bodyData) {
  const { displayName, email, password, image } = bodyData;
  await Users.create({ displayName, email, password, image });
  const token = await getToken(email);
  return token;
}

module.exports = {
  getToken,
  insertUserServ,
  getUserEmailServ,  
};
