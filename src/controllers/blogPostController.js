/* eslint-disable max-lines-per-function */
// @ts-nocheck
require('dotenv').config();

const express = require('express');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const { BlogPost, Category, PostsCategory, User } = require('../models');
const config = require('../config/config');
const { postSchema } = require('../validators');

const key = process.env.JWT_SECRET;
const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development,
);

const jtwConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const getAll = async (req, res) => {
  try {
    const posts = await BlogPost.findAll({
      attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
      include: [
        { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return res.status(200).json(posts);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await BlogPost.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
      include: [
        { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    
    return res.status(200).json(post);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const createPost = async (req, res) => {
  try {
    console.log(req.data, 'DATA');

    const { title, content, categoryIds } = req.body;
    const { error } = postSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    categoryIds.forEach(async (categoryId) => {
      const category = await Category.findByPk(categoryId);
      console.log(category, 'CATEGORY');
      if (!category) return res.status(400).json({ message: '"categoryIds" not found' });
    });

    const post = await BlogPost.create({
      title,
      content,
      userId: req.data.id,
      published: Date.now(),
      updated: Date.now(),
    });
    categoryIds.forEach(async (categoryId) => {
      await PostsCategory.create({
        categoryId,
        postId: post.id,
      });
    });

    return res.status(201).json(post);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  createPost,
  getAll,
  getPostById,
  
  // createAdmin,
};
