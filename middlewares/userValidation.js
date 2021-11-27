const joi = require('joi');

function validateUser(req, res, next) {
  const { body } = req;

  const { error } = joi.object({
    displayName: joi.string().min(8).required(),
    email: joi.string().email().required(),
    password: joi.string().length(6).required(),
    image: joi.string(),
  }).validate(body);

  if (error) {
    console.log(error);
    const errorMessage = error.details[0].message;
    return res.status(400).json({ message: errorMessage });
  }
  return next();
}

module.exports = {
  validateUser,
};

// function validateDisplayName(req, _res, next) {
//   const { displayName } = req.body;
//   if (!displayName || displayName.length < 8) {
//     return {
//       error:
//       {
//         message: '"displayName" length must be at least 8 caracters long',
//       },
//       status: 400,
//     };
//   }
//   return next();
// }

// function validateEmail(req, _res, next) {
//   const { email } = req.body;
//   const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
//   if (!email.match(emailRegex)) {
//     return {
//       error:
//       {
//         message: '"email" must be a valid email',
//       },
//       status: 400,
//     };
//   }
//   return next();
// }

// function validateEmailRequired(req, _res, next) {
//   const { email } = req.body;
//   if (!email) {
//       return {
//         error:
//         {
//           message: '"email" is required',
//         },
//         status: 400,
//       };
//     }
//     return next();
// }

// function validatePassword(req, _res, next) {
//   const { password } = req.body;
//   if (password.length < 6) {
//     return {
//       error:
//       {
//         message: '"password" length must be 6 characters long',
//       },
//       status: 400,
//     };
//   }
//   return next();
// }

// module.exports = {
//   validateDisplayName,
//   validateEmail,
//   validateEmailRequired,
// };
