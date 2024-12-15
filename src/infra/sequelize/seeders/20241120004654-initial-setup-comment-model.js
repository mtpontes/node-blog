'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('comments', [
      { text: 'Test comment 1', edited: false, userId: 1, publicationId: 1, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Test comment 2', edited: true, userId: 1, publicationId: 2, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('comments', {});
  }
};
