'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('clientes', {
      cod: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true
      },
      cpf: 
      {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
      },
      nome:
      {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      endereco_cep:
      {
        type: Sequelize.INTEGER(8),
        allowNull: false
      },
      endereco_numero:
      {
        type: Sequelize.INTEGER(5),
        allowNull: false
      },
      endereco_complemento:
      {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      celular:
      {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      email:
      {
        type: Sequelize.STRING(60),
        allowNull: true
      },
      observacoes:
      {
        type: Sequelize.STRING(300),
        allowNull: true
      },
      status:
      {
        type: Sequelize.INTEGER(1),
        allowNull: false
      },
  })},

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('clientes');
  }
}