const { validateJWT } = require('./userMiddlewares');
const { Categories, BlogPosts } = require('../models');
const { tokenJwtIsValid } = require('../auth/validateJWT');

const titleIsRequired = (req, res, next) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({
            message: '"title" is required',
        });
    }
    next();
};

const contentIsRequired = (req, res, next) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({
            message: '"content" is required',
        });
    }
    next();
};

const categoryIdsIsRequired = (req, res, next) => {
    const { categoryIds } = req.body;
    if (!categoryIds) {
        return res.status(400).json({
            message: '"categoryIds" is required',
        });
}
    next();
};

const JWTisValid = (req, res, next) => {
    validateJWT(req, res, next);
};

const categoryExists = async (req, res, next) => {
const { categoryIds } = req.body;
try {
    const categories = await Categories.findAll({ where: { id: categoryIds } });
    if (categories.length !== categoryIds.length) {
        return res.status(400).json({
            message: '"categoryIds" not found',
        });
    }
} catch (error) {
    return res.status(500).json({
        message: 'Internal server error',
        });
}

next();
};

const verifyPostIdExists = async (req, res, next) => {
    const { id } = req.params;
    try {
        const blogPost = await BlogPosts.findOne({ where: { id } });
        if (!blogPost) {
            return res.status(404).json({
                message: 'Post does not exist',
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            });
    }
    next();
};

const noEditCategories = async (req, res, next) => {
    const { categoryIds } = req.body;
    if (categoryIds) {
        return res.status(400).json({
            message: 'Categories cannot be edited',
        });
    }
next();
};

const userIsEqualToPostAuthor = async (req, res, next) => {
    const { id } = req.params;
    const token = req.headers.authorization;
    const { data } = await tokenJwtIsValid(token);
    try {
        const blogPost = await BlogPosts.findOne({ where: { id } });
        if (blogPost.userId !== data.id) {
            return res.status(401).json({
                message: 'Unauthorized user',
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            });
         }
    next();
};

module.exports = {
    titleIsRequired,
    contentIsRequired,
    categoryIdsIsRequired,
    JWTisValid,
    categoryExists,
    verifyPostIdExists,
    noEditCategories,
    userIsEqualToPostAuthor,
};
