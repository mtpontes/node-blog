'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('replies', [
      { text: 'Test reply to comment 1', edited: false, userId: 1, commentId: 1, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Test reply to comment 2', edited: true, userId: 2, commentId: 2, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('replies', {});
  }
};
