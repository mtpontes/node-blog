'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      { email: 'admin@example.com', password: 'root', role: 'admin', name: 'Admin User', createdAt: new Date(), updatedAt: new Date() },
      { email: 'user@example.com', password: 'root', role: 'user', name: 'User 1', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', {});
  }
};
