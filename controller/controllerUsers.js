const { Users } = require('../models');

async function addNewUser(req, res) {
  const { displayName, email, password, image } = req.body;

  const result = await Users.create({
    displayName,
    email,
    password,
    image,
  });

  return res.status(201).send(result);
}

module.exports = {
  addNewUser,
};
