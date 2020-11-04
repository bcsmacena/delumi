'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('habilitacoes',
      {
        cod:
        {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true
        },
        cod_profissional:
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: 
          { 
            model:'profissionais',
            key: 'cod'
          }
        },
        cod_servico:
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: 
          { 
            model:'servicos',
            key: 'cod'
          }
        },
        status:
        {
          type: Sequelize.INTEGER(1),
          allowNull: false
        },
      })

    },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('habilitacoes');
  }
};
