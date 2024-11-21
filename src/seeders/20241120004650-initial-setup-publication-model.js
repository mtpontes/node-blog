'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('publications', [
      { description: 'Test publication 1', imageLink: 'https://example.com/publication1.jpg', edited: false, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { description: 'Test publication 2', imageLink: 'https://example.com/publication2.jpg', edited: true, userId: 2, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('publications', {});
  }
};
