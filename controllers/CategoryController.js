const db = require('../models');

class CategoryController {
  static async createCategory(req, res) {
    const category = req.body;
    try {
      const createdCategory = await db.Categories.create(category);    
      return res.status(201).json(createdCategory);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = CategoryController;
