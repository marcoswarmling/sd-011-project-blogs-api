const { Categorie } = require('../models');

class Validations {
  constructor() {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    this.isValid = {
      minimum: 8,
      regEmail: regexEmail,
      sixChar: 6,
      empty: 0,
    };
    this.category = Categorie;
    this.cannot = 'Categories cannot be edited';
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

  async validBodyCategory(req, res, next) {
    const { name } = req.body;
    if (name === undefined || name.length === this.isValid.empty) {
      return res.status(400).json({ message: '"name" is required' });
    }
    return next();
  }

  async validPostTitle(req, res, next) {
    const { title } = req.body;
    if (title === undefined || title.length === this.isValid.empty) {
      return res.status(400).json({ message: '"title" is required' });
    }
    return next();
  }

  async validPostContent(req, res, next) {
    const { content } = req.body;
    if (content === undefined || content.length === this.isValid.empty) {
      return res.status(400).json({ message: '"content" is required' });
    }
    return next();
  }

  async validPostCategoryIds(req, res, next) {
    const { categoryIds } = req.body;
    if (categoryIds === undefined || categoryIds.length === this.isValid.empty) {
      return res.status(400).json({ message: '"categoryIds" is required' });
    }
    
    const categoryIdsExist = await this.category.findAll({
      where: {
        id: categoryIds,
      },
    });

    if (categoryIdsExist.length !== categoryIds.length) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
    return next();
  }

  async validCannotUpadateCategory(req, res, next) {
    const { categoryIds } = req.body;
    if (categoryIds) {
      return res.status(400).json({ message: this.cannot });
    }

    return next();
  }
}

module.exports = Validations;