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
           getPostUpdate,
            deletePost,
             queryPost } = require('../controllers/blogPostController');

    router.post('/', 
    titleIsRequired,
     contentIsRequired,
      categoryIdsIsRequired,
       JWTisValid,
        categoryExists,
         postRegistration);

    router.get('/', JWTisValid, getAllPosts);

    router.get('/search', JWTisValid, queryPost);   
    
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

    router.delete('/:id', JWTisValid,
                           verifyPostIdExists,
                            userIsEqualToPostAuthor,
                             deletePost);

    module.exports = router;