/* eslint-disable no-unused-vars */
const argon2 = require('argon2');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'Default User',
      email: 'name@example.com',
      password: await argon2.hash('88888888'),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
