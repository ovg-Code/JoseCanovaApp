const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_Doce_Mat_Grup', {
    Docente_Cedula_Docente: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Materia_Codigo_Materia: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Grupo_id_grupo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Hora: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Dia: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TB_Doce_Mat_Grup',
    timestamps: false
  });
};
