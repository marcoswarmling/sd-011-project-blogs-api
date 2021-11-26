const jwt = require('jsonwebtoken');

const secret = 'babalu';
const idKey = 'id';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const controllerCreateUser = async (req, res) => {
  const token = req.headers.authorization;
  const tokenVerified = jwt.verify(token, secret, jwtConfig);
  try {
    const newUser = await serviceCreateUser(req.body, tokenVerified);
    res.status(201).json({ recipe: { ...newRecipe } });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ menssage: 'problema aqui: rota post recipes' });
  }
};


module.exports = { controllerCreateUser };