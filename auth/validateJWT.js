require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

function jwtValidation(req, res, next) {
  const token = req.headers.authorization;

  if (!token) throw new Error('missingToken');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.token = decoded;
    next();
  } catch (error) {
    throw new Error('jwtTokenError');
  }
}

module.exports = {
  jwt,
  jwtConfig,
  jwtValidation,
};

//   try {
//     /* Através o método verify, podemos validar e decodificar o nosso JWT. */
//     const decoded = jwt.verify(token, segredo);
//     /*
//       A variável decoded será um objeto equivalente ao seguinte:
//       {
//         data: {
//           _id: '5e54590ba49448f7e5fa73c0',
//           username: 'italssodj',
//           password: 'senha123'
//         },
//         iat: 1582587327,
//         exp: 1584774714908
//       }
//     */

//     const user = await model.findUser(decoded.data.username);

//     /* Não existe um usuário na nossa base com o id informado no token. */
//     if (!user) {
//       return res
//         .status(401)
//         .json({ message: 'Erro ao procurar usuário do token.' });
//     }

//     /* O usuário existe! Colocamos ele em um campo no objeto req.
//        Dessa forma, o usuário estará disponível para outros middlewares que
//        executem em sequência */
//     req.user = user;

//     /* Por fim, chamamos o próximo middleware que, no nosso caso,
//        é a própria callback da rota. */
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: err.message });
//   }
// };
