const router = require('express').Router();
const { passwordHaveSixCharacters,
     passwordExists,
      validateEmail,
       emailExists,
        displayNameLessThanEight,
         userAlreadyExists,
          validateJWT,
           verifyIdExists,
      } = require('../middlewares/userMiddlewares');
const { userRegistration,
         getAllUsers,
          getUserById,
           deleteUserById } = require('../controllers/userController');

router.post('/', 
passwordExists,
 passwordHaveSixCharacters,
  emailExists,
   validateEmail,
    displayNameLessThanEight,
     userAlreadyExists,
      userRegistration);

router.get('/', validateJWT, getAllUsers);

router.get('/:id', validateJWT, verifyIdExists, getUserById);

router.delete('/:id', validateJWT, deleteUserById)
module.exports = router;