const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_Estudiante_Acudiente', {
    Estudiante_Cedula_estudiante: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Acudiente_Cedula_acudiente: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Ano: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TB_Estudiante_Acudiente',
    timestamps: false
  });
};
