const router = require('express').Router();
const { passwordHaveSixCharacters,
     passwordExists,
      validateEmail,
       emailExists,
        displayNameLessThanEight,
         userAlreadyExists } = require('../middlewares/userMiddlewares');
const { userRegistration } = require('../controllers/userController');

router.post('/', 
passwordExists,
 passwordHaveSixCharacters,
  emailExists,
   validateEmail,
    displayNameLessThanEight,
     userAlreadyExists,
      userRegistration);

module.exports = router;