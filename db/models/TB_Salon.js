const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_Salon', {
    Codigo_Salon: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    Pabellon_Salon: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Capacidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TB_Salon',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Codigo_Salon" },
        ]
      },
    ]
  });
};
