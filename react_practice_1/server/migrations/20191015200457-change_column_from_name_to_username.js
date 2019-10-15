'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Users', 'name', 'username')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Users', 'name', 'username')
  }
};
