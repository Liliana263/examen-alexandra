'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          nombre: "liliana",
          correo: "lili98@mail.com",
          contrasena: "12345p",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "simon",
          correo: "simon@mail.com",
          contrasena: "9876u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
