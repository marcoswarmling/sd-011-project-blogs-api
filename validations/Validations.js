// uma classes que contem todas as validações que vem da requisição
class Validations {
  constructor() {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    this.isValid = {
      minimum: 8,
      regEmail: regexEmail,
      sixChar: 6,
      empty: 0,
    };
  }

  // validação de nome
  async validName(req, res, next) {
    const { displayName } = req.body;
    if (displayName.length < this.isValid.minimum) {
      return res.status(400).json(
        { message: '"displayName" length must be at least 8 characters long' },
      );
    }

    return next();
  }

  // validação de email
  async validEmail(req, res, next) {
    if (req.body.email === undefined) {
      return res.status(400).json({ message: '"email" is required' });
    }

    if (req.body.email.length === this.isValid.empty) {
      return res.status(400).json({ message: '"email" is not allowed to be empty' });
    } if (!this.isValid.regEmail.test(req.body.email)) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    }

    return next();
  }

  // validação de senha
  async validPassword(req, res, next) {
    if (req.body.password === undefined) {
      return res.status(400).json({ message: '"password" is required' });
    }

    if (req.body.password.length === this.isValid.empty) {
      return res.status(400).json({ message: '"password" is not allowed to be empty' });
    }

    if (req.body.password.length !== this.isValid.sixChar) {
      return res.status(400).json(
        { message: '"password" length must be 6 characters long' },
        );
    }
      
    return next();
  }
}

module.exports = Validations;