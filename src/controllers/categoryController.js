// @ts-nocheck
require('dotenv').config();

const express = require('express');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const { BlogPost, Category, PostsCategory, User } = require('../models');
const config = require('../config/config');
const { userSchema, loginSchema } = require('../validators');

const key = process.env.JWT_SECRET;
const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development,
);

const jtwConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    const category = await Category.create({ name });
    console.log(category);

    res.status(201).json(category);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  createCategory,
  
  // createAdmin,
};
