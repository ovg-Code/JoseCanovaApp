const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_Administrador', {
    Cedula_Administrador: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    Primer_Nombre_Administrador: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Primer_Apellido_Administrador: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Segundo_Nombre_Administrador: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Segundo_Apellido_Administrador: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Telefono_Administrador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Email_Administrador: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Ciudad_Administrador: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Barriada_Administrador: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TB_Administrador',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Cedula_Administrador" },
        ]
      },
    ]
  });
};
