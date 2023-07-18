const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_Media', {
    Bachiller: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    Grupo_id_grupo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Turno: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TB_Media',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Bachiller" },
        ]
      },
    ]
  });
};
