const postValidsFields = (req, res, next) => {
    const { title, content } = req.body;
    if (!title) {
        return res.status(400).json({
            message: '"title" is required',
        });
    }
    if (!content) {
        return res.status(400).json({
            message: '"content" is required',
        });
    }
    next();
};

const categoryIdExists = (req, res, next) => {
    const { categoryIds } = req.body;
    if (!categoryIds) {
        return res.status(400).json({
            message: '"categoryIds" is required',
        });
    }
    next();
};

module.exports = {
    postValidsFields,
    categoryIdExists,
};