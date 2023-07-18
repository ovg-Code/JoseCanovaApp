const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_Grupo', {
    id_grupo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    Salon_Codigo_Salon: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Periodo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Nivel: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Letra: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Ano: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TB_Grupo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_grupo" },
        ]
      },
    ]
  });
};
