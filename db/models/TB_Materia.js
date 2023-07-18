const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_Materia', {
    Codigo_Materia: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    Nombre_Materia: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TB_Materia',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Codigo_Materia" },
        ]
      },
    ]
  });
};
