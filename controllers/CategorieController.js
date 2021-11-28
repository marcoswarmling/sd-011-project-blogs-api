const CategorieService = require('../services/CategorieService');

class CategorieController {
  constructor() {
    this.categorieService = new CategorieService();
  }

  async createCategory(req, res) {
    try {
      const token = req.headers.authorization;
      const { code, data, message } = await this.categorieService.create(token, req.body);
      if (message) {
        return res.status(code).json({ message });
      }
      return res.status(code).json(data);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = CategorieController;