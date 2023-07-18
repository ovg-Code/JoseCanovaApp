const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_Usuario', {
    ID_Usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre_Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    'Contraseña': {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Rol: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Email_Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Cedula: {
      type: DataTypes.STRING(45),
      allowNull: true,
      references: {
        model: 'TB_Administrador',
        key: 'Cedula_Administrador'
      }
    }
  }, {
    sequelize,
    tableName: 'TB_Usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_Usuario" },
        ]
      },
      {
        name: "Cedula",
        using: "BTREE",
        fields: [
          { name: "Cedula" },
        ]
      },
    ]
  });
};
