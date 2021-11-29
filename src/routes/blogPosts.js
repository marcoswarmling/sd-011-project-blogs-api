const router = require('express').Router();

const { titleIsRequired,
         contentIsRequired,
          categoryIdsIsRequired,
           JWTisValid,
            categoryExists,
             verifyPostIdExists } = require('../middlewares/blogPostMiddlewares');

    const { postRegistration,
             getAllPosts,
              getPostById } = require('../controllers/blogPostController');

    router.post('/', 
    titleIsRequired,
     contentIsRequired,
      categoryIdsIsRequired,
       JWTisValid,
        categoryExists,
         postRegistration);

    router.get('/', JWTisValid, getAllPosts);

    router.get('/:id', JWTisValid,
                         verifyPostIdExists,
                          getPostById);

    module.exports = router;