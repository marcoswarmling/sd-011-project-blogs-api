const { Categories } = require('../models');

const postCategories = async (req, res) => {
    const { name } = req.body;
    Categories.create({ name })
        .then((categories) => res.status(201).json(categories))
        .catch((err) => res.send(err));
};

const getAllCategories = async (_req, res) => {
    Categories.findAll()
        .then((categories) => 
        console.log(categories) || res.status(200).json(categories))
        .catch((err) => res.send(err));
};

module.exports = { 
    postCategories,
    getAllCategories,
};