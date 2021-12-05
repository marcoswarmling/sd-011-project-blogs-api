const router = require('express').Router();
const { post, category } = require('../services');
const tokenValidMiddle = require('../validators/middlewares/tokenValidMiddle');
const postValidMiddle = require('../validators/middlewares/postValidMiddle');
const getByArrayIds = require('../utils/getByArrayIds');

const STATUS_CREATED = 201;
const STATUS_OK = 200;

router.get('/', tokenValidMiddle, async (_req, res, next) => {
    const result = await post.getAll();
  
    if (result.message) return next(result);
  
    res.status(STATUS_OK).json(result);
  });

const createPostsCategories = async (createdPost, categories) => {
  createdPost.addCategories(categories);
};

router.post('/', tokenValidMiddle, postValidMiddle, async (req, res, next) => {
    const { body, user } = req;
    const { categoryIds } = body;
    const { getAllByArrayIds } = category;

    const categories = await getByArrayIds(categoryIds, getAllByArrayIds); // aqui
    
    const result = await post.createIt({ body, user });
    if (result.message) return next(result);
    createPostsCategories(result, categories);
    
    res.status(STATUS_CREATED).json(result);
});

module.exports = router;