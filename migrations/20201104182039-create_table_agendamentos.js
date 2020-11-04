'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('agendamentos',
      {
        cod:
        {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true
        },
        cod_cliente:
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: 
          { 
            model:'clientes',
            key: 'cod'
          }
        },
        cod_habilitacao:
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: 
          { 
            model:'habilitacoes',
            key: 'cod'
          }
        },
        data:
        {
          type: Sequelize.DATE,
          allowNull: false
        },
        hora:
        {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        pago:
        {
          type: Sequelize.INTEGER(1),
          allowNull: false
        },
      })

    },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('agendamentos');
  }
};
