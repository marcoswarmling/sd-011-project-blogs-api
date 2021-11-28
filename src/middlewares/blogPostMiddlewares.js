const { validateJWT } = require('./userMiddlewares');
const { Categories } = require('../models');

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

module.exports = {
    titleIsRequired,
    contentIsRequired,
    categoryIdsIsRequired,
    JWTisValid,
    categoryExists,
};
