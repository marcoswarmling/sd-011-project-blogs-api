const router = require('express').Router();
const { passwordHaveSixCharacters,
     passwordExists,
      validateEmail,
       emailExists,
        displayNameLessThanEight,
         userAlreadyExists,
          validateJWT,
      } = require('../middlewares/userMiddlewares');
const { userRegistration, getAllUsers } = require('../controllers/userController');

router.post('/', 
passwordExists,
 passwordHaveSixCharacters,
  emailExists,
   validateEmail,
    displayNameLessThanEight,
     userAlreadyExists,
      userRegistration);

router.get('/', validateJWT, getAllUsers);

module.exports = router;