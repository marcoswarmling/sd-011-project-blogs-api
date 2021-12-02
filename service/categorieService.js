const { Categories } = require('../models');

const serviceInsertCategories = async (name) => {
    console.log('Entrei aqui');
    try {
        const insertCategorie = await Categories.create({ name });
        console.log(insertCategorie);
        return insertCategorie;
    } catch (error) {
        return error;
    }
};

module.exports = {
    serviceInsertCategories,
};