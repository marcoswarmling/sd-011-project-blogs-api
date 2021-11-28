const db = require('../models');

class CategoryController {
  static async getAllCategories(_req, res) {
    try {
      const allCategories = await db.Categories.findAll();
      return res.status(200).json(allCategories);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

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
