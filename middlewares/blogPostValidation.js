const { Category } = require('../models');
require('dotenv');

const blogPostValidation = (req, res, next) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: '"title" is required' });
    }
    next();
};

const contentIsValid = (req, res, next) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ message: '"content" is required' });
    }
    next();
};

const categoryIsValid = (req, res, next) => {
    const { categoryIds } = req.body;
    if (!categoryIds || categoryIds.length === 0) {
        return res.status(400).json({ message: '"categoryIds" is required' });
    }
    next();
};

const categoryIdExist = async (req, res, next) => {
    const { categoryIds } = req.body;
    const category = await Category.findAll({ where: { id: categoryIds } });
    
    if (category.length !== categoryIds.length) {
        return res.status(400).json({ message: '"categoryIds" not found' });
    }
    next();
};

module.exports = {
    blogPostValidation,
    contentIsValid,
    categoryIsValid,
    categoryIdExist,
};
