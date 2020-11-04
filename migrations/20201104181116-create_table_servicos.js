'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('servicos', {
      cod: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true
      },
      tipo: 
      {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
      },
      descricao:
      {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      preco:
      {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false
      },
      status:
      {
        type: Sequelize.INTEGER(1),
        allowNull: false
      },
      status:
      {
        type: Sequelize.INTEGER(1),
        allowNull: false
      },
  })},

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('servicos');
  }
}