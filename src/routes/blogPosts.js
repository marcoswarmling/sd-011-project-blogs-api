const router = require('express').Router();

const { titleIsRequired,
         contentIsRequired,
          categoryIdsIsRequired,
           JWTisValid,
            categoryExists } = require('../middlewares/blogPostMiddlewares');

    const { postRegistration, getAllPosts } = require('../controllers/blogPostController');

    router.post('/', 
    titleIsRequired,
     contentIsRequired,
      categoryIdsIsRequired,
       JWTisValid,
        categoryExists,
         postRegistration);

    router.get('/', JWTisValid, getAllPosts);
    module.exports = router;