const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_Docente', {
    Cedula_Docente: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    Primer_Nombre_Docente: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Segundo_Nombre_Docente: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Primer_Apellido_Docente: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Segundo_Apellido_Docente: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Foto_Docente: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Email_Docente: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Telefono_Docente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Ciudad_Docente: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Barriada_Docente: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Universidad: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Titulo: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TB_Docente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Cedula_Docente" },
        ]
      },
    ]
  });
};
