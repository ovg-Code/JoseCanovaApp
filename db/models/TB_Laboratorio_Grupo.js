const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_Laboratorio_Grupo', {
    Laboratorio_Codigo_Laboratorio: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Grupo_id_grupo: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TB_Laboratorio_Grupo',
    timestamps: false
  });
};
