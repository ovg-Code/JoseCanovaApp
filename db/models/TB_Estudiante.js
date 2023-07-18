const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_Estudiante', {
    Cedula_estudiante: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    Grupo_id_grupo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Primer_Nombre_Estudiante: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Segundo_Nombre_Estudiante: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Primer_Apellido_Estudiante: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Segundo_Apellido_Estudiante: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Foto_Estudiante: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Telefono_Estudiante: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Email_Estudiante: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Ciudad_Estudiante: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Barriada_Estudiante: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TB_Estudiante',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Cedula_estudiante" },
        ]
      },
    ]
  });
};
