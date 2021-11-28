const router = require('express').Router();

const { titleIsRequired,
         contentIsRequired,
          categoryIdsIsRequired,
           JWTisValid,
            categoryExists } = require('../middlewares/blogPostMiddlewares');

    const { postRegistration } = require('../controllers/blogPostController');

    router.post('/', 
    titleIsRequired,
     contentIsRequired,
      categoryIdsIsRequired,
       JWTisValid,
        categoryExists,
         postRegistration);

    module.exports = router;