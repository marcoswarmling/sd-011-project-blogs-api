const { jwt, jwtConfig } = require('../auth/validateJWT');
const { User } = require('../models');

const findOrCreate = async (displayName, email, password, image) => {
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { displayName, email, password, image },
  });

  console.log(' o retorno no service findOrCreate é ==>', user, created);

  if (!created) {
    throw new Error('userAlreadyRegistered');
  }
console.group('dodei depois do thorw')
  const token = jwt.sign(
    { data: { displayName, email } },
    process.env.SECRET,
    jwtConfig,
  );

  return token;
};

module.exports = {
  findOrCreate,
};

// const [user, created] = await User.findOrCreate({
//   where: { username: 'Eric' },
//   defaults: {
//     job: 'Technical Lead JavaScript'
//   }
// });
// console.log(user.username); // 'Eric'
// console.log(user.job); // pode ou não ser 'Technical Lead JavaScript'
// console.log(created); // Valor booleano que indica se a instancia foi criada ou nao
// if (created) {
//   console.log(user.job); // 'Technical Lead JavaScript'
// }
