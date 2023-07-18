const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_Laboratorio', {
    Codigo_Laboratorio: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    Pabellon_Laboratorio: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Tipo_Laboratorio: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TB_Laboratorio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Codigo_Laboratorio" },
        ]
      },
    ]
  });
};
