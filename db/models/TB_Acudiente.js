const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_Acudiente', {
    Cedula_acudiente: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    Primer_Nombre_Acudiente: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Primer_Apellido_Acudiente: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Segundo_Nombre_Acudiente: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Segundo_Apellido_Acudiente: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Telefono_Acudiente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Email_Acudiente: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Ciudad_Acudiente: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Barriada_Acudiente: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TB_Acudiente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Cedula_acudiente" },
        ]
      },
    ]
  });
};
