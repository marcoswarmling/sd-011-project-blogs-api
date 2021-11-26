const { Categories } = require('../models');

const postCategories = (req, res) => {
    const { name } = req.body;
    Categories.create({ name })
        .then((categorie) => res.status(201).json(categorie))
        .catch((err) => res.send(err));
};

module.exports = { 
    postCategories,
};