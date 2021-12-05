const { Users } = require('../models');

// create user
const createUser = async ({ displayName, email, password, image }) =>
  Users.create({
    displayName,
    email,
    password,
    image,
});

// find user by email
const findEmail = async (email) =>
  Users.findOne({
    where: { email },
    raw: true,
});

// find user by id
const findById = async (id) =>
  Users.findById(
    id, { raw: true },
);

// find all
const findAll = async () => 
  Users.findAll({
    raw: true,
});

module.exports = {
  createUser,
  findEmail,
  findById,
  findAll,
};
