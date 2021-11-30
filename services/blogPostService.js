const jwt = require('jsonwebtoken');
const { BlogPost, User, Categories } = require('../models');
require('dotenv/config');

const secret = process.env.SECRET || 'minhasenhasecreta';

const createBlogPost = async (title, content, categoryIds, authorization) => {
  const payload = jwt.verify(authorization, secret);
  const userEmail = payload.email;
  const findUser = await User.findOne({ where: { email: userEmail } });
  const userId = findUser.id;

  const array = [];
  const promise = categoryIds.map(async (elemt) => {
    if (await Categories.findByPk(elemt) !== null) {
      array.push(1);
    } else {
      array.push(0);
    }
  });
  await Promise.all(promise);
  const idExiste = array.every((elemt) => elemt === 1);
  if (!idExiste) return { status: 400, message: '"categoryIds" not found' };

  const result = await BlogPost.create({ title, content, categoryIds, userId });

  return result;
};

const findAll = async () => {
  const result = await BlogPost.findAll({ include: { model: User, as: 'user' } });

  return result;
};

module.exports = {
  createBlogPost,
  findAll,
};
