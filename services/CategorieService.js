const { Categorie } = require('../models');
const TokenJWT = require('../validations/TokenJwt');

class CategorieService {
  constructor() {
    this.categorie = Categorie;
    this.token = new TokenJWT();
    this.zero = 0;
  }

  async create(token, categorieData) {
    try {
      if (token === undefined || token.length === this.zero) {
        return { code: 401, message: 'Token not found' };
      }
      this.token.validate(token);
      const categorieExits = await this.categorie.findOne({ where: { name: categorieData.name } });
      if (categorieExits) {
        return { code: 409, message: 'Categorie already registered' };
      }
      const categorie = await this.categorie.create(categorieData);
      return { code: 201, data: categorie };
    } catch (error) {
      return { code: 401, message: 'Expired or invalid token' };
    }
  }

  async getAll(token) {
    try {
      if (token === undefined || token.length === this.zero) {
        return { code: 401, message: 'Token not found' };
      }
      this.token.validate(token);
      const data = await this.categorie.findAll();
      return { code: 200, data };
    } catch (error) {
      return { code: 401, message: 'Expired or invalid token' };
    }
  }
}

module.exports = CategorieService;