const { Users } = require('../models');
const { verify } = require('../auth/jwtFunctions');
const { findPostById } = require('../services/blogPostsServices');

const displayNameIsValid = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const hasEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;
  if (
    !email
    || email === '@gmail.com' || !email.includes('@')
    || !email.includes('.com')
  ) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  next();
};

const hasPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

const isPasswordValid = (req, res, next) => {
  const { password } = req.body;
  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

const isUnicEmail = async (req, res, next) => {
  const { email } = req.body;
  const userEmail = await Users.findOne({ where: { email } });
  if (userEmail) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  next();
};

const isNotEmail = async (req, res, next) => {
  const { email } = req.body;
  const userEmail = await Users.findOne({ where: { email } });
  if (!userEmail) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

const emailNotNull = async (req, res, next) => {
  const { email } = req.body;
  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  next();
};

const passwordNotNull = async (req, res, next) => {
  const { password } = req.body;
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

const hasToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  next();
};

const isTokenValid = (req, res, next) => {
  const { authorization: token } = req.headers;
  try {
    const userInfo = verify(token);
    req.info = userInfo;
  } catch (error) {
    if (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  }
  next();
};

const userExists = async (req, res, next) => {
  const { id } = req.params;
  const findUser = await Users.findOne({ where: { id: Number(id) } });
  if (!findUser) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  next();
};

const hasName = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

const hasTitle = async (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }
  next();
};

const hasContent = async (req, res, next) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }
  next();
};

const hastCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }
  next();
};

const updatePost = async (req, res, next) => {
  const { title, content } = req.body;
  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }
  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }
  next();
};

const notCategories = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (categoryIds) {
    return res.status(400).json({ message: 'Categories cannot be edited' });
  }
  next();
};

const userIsValid = async (req, res, next) => { // req. 10
  const { id: postId } = req.params;
  const { data: { id: userId } } = req.info; // informação vinda do Token
  const foundPost = await findPostById(postId);
  // console.log(foundPost); // a propriedade userId está disponível no foundPost
  if (userId !== foundPost.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
};

const postCanBeExcluded = async (req, res, next) => { // req. 11
  const { id: postId } = req.params;
  const { data: { id: userId } } = req.info;
  const foundPost = await findPostById(postId);
  if (!foundPost) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  if (userId !== foundPost.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
};

const validateUser = [
  displayNameIsValid, hasEmail, isValidEmail, hasPassword, isPasswordValid, isUnicEmail,
];

const loginIsValid = [
  emailNotNull, passwordNotNull, isNotEmail,
];

const validateToken = [
  hasToken, isTokenValid,
];

const userIsThere = [
  hasToken, isTokenValid, userExists,
];

const validateCategories = [
  hasToken, isTokenValid, hasName,
];

const validatePosts = [
  hasToken, isTokenValid, hasTitle, hasContent, hastCategoryId,
];

const postsCanBeUpdate = [
  hasToken, isTokenValid, updatePost, notCategories, userIsValid,
];

const validateExcludePost = [
  hasToken, isTokenValid, postCanBeExcluded,
];

module.exports = {
  validateUser,
  loginIsValid,
  validateToken,
  userIsThere,
  validateCategories,
  validatePosts,
  postsCanBeUpdate,
  validateExcludePost,
};