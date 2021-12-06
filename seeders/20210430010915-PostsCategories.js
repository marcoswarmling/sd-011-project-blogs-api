module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('BlogpostCategories',
      [
        {
          blogpostId: 1,
          categoryId: 1,
        },
        {
          blogpostId: 2,
          categoryId: 2,
        },

      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('BlogpostCategories', null, {});
  },
};
