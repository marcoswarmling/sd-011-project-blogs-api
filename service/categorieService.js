const { Categories } = require('../models');

const serviceInsertCategories = async (name) => {
    try {
        const insertCategorie = await Categories.create({ name });
        console.log('INSERT', insertCategorie);
        return insertCategorie;
    } catch (error) {
        return error;
    }
};

module.exports = {
    serviceInsertCategories,
};