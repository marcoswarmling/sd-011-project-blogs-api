const router = require('express').Router();

const { titleIsRequired,
         contentIsRequired,
          categoryIdsIsRequired,
           JWTisValid,
            categoryExists,
             verifyPostIdExists,
              noEditCategories,
               userIsEqualToPostAuthor } = require('../middlewares/blogPostMiddlewares');
   
const { postRegistration,
         getAllPosts,
          getPostById,
           getPostUpdate } = require('../controllers/blogPostController');

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

    router.put('/:id', 
                titleIsRequired,
                 contentIsRequired,
                  JWTisValid,
                   verifyPostIdExists,
                    noEditCategories,
                     userIsEqualToPostAuthor,
                      getPostUpdate);

    module.exports = router;