// @ts-nocheck
require('dotenv').config();

const express = require('express');
const Sequelize = require('sequelize');
const { BlogPost, Category, PostsCategory, User } = require('../models');
const config = require('../config/config');
const { userSchema } = require('../validators');

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development,
);

const app = express();

const getAll = async (req, res) => {
  try {
    const employees = await User.findAll({});

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const { error } = userSchema.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    // verify if the user already exists by email
    const checkUser = await User.findOne({ where: { email } });
    if (checkUser) {
      return res.status(409).json({ message: 'User already registered' });
    }

    const user = await User.create({
      displayName,
      email,
      password,
      image,
    });

    return res.status(201).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });

    if (req.query.includePosts === true) {
      const posts = await BlogPost.findAll({
        where: { userId: id },
        include: [
          { model: Category, as: 'categories', attributes: ['id', 'name'] },
        ],
      });

      return res.status(200).json({ user, posts });
    }

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
  createUser,
  getUserById,

  // login,
  // createAdmin,
};
