const router = require('express').Router();
const { blogpost, category } = require('../services');
const tokenValidMiddle = require('../validators/middlewares/tokenValidMiddle');

const STATUS_CREATED = 201;
const STATUS_OK = 200;

router.get('/', tokenValidMiddle, async (_req, res, next) => {
    const result = await blogpost.getAll();
  
    if (result.message) return next(result);
  
    res.status(STATUS_OK).json(result);
  });

const arrayIdsExists = async (categoryIds) => {
    const categories = await category.getAllByArrayIds(categoryIds);
    return categories;
};

const createPostsCategories = async (post, categories) => {
  post.addCategories(categories);
};

router.post('/', tokenValidMiddle, async (req, res, next) => {
    const { body, user } = req;
    const { categoryIds } = body;

    const categories = await arrayIdsExists(categoryIds);

    // console.log('Aqui o retorno em categories');
    // console.log(categories);

    // if (categories.length === ) return res.status(404).send('No categories found');
    
    const result = await blogpost.createIt({ body, user });
    if (result.message) return next(result);
    createPostsCategories(result, categories);
    
    res.status(STATUS_CREATED).json(result);
});

module.exports = router;