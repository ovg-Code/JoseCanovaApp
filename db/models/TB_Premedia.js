const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_Premedia', {
    Turno: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    Grupo_id_grupo: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TB_Premedia',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Turno" },
        ]
      },
    ]
  });
};
