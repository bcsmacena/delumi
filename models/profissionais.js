module.exports = (sequelize, DataTypes) => {
    const Empresa = sequelize.define(
      "Profissional",
      {
        cod: 
        {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        cpf: 
        {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        rg: 
        {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        nome: 
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dataNascimento: 
        {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        sexo: 
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        endereco_cep: 
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        endereco_numero:
        {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        endereco_complemento:
        {
            type: DataTypes.STRING,
            allowNull: true,
        },
        celular:         
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

      },
      {
        timestamps: false,
        tableName: "profissionais",
        freezeTableName: true,
        modelName: 'singularName',
      }
    );
  
    // Empresa.associate = (models) => {
    //     Empresa.hasMany(models.Contrato, {
    //     foreignKey: "empresa_id",
    //     });
    // };
  
    return Profissional;
  };
  