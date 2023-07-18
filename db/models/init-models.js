var DataTypes = require("sequelize").DataTypes;
var _TB_Acudiente = require("./TB_Acudiente");
var _TB_Administrador = require("./TB_Administrador");
var _TB_Doce_Mat_Grup = require("./TB_Doce_Mat_Grup");
var _TB_Docente = require("./TB_Docente");
var _TB_Estudiante = require("./TB_Estudiante");
var _TB_Estudiante_Acudiente = require("./TB_Estudiante_Acudiente");
var _TB_Grupo = require("./TB_Grupo");
var _TB_Laboratorio = require("./TB_Laboratorio");
var _TB_Laboratorio_Grupo = require("./TB_Laboratorio_Grupo");
var _TB_Materia = require("./TB_Materia");
var _TB_Media = require("./TB_Media");
var _TB_Premedia = require("./TB_Premedia");
var _TB_Salon = require("./TB_Salon");
var _TB_Usuario = require("./TB_Usuario");

function initModels(sequelize) {
  var TB_Acudiente = _TB_Acudiente(sequelize, DataTypes);
  var TB_Administrador = _TB_Administrador(sequelize, DataTypes);
  var TB_Doce_Mat_Grup = _TB_Doce_Mat_Grup(sequelize, DataTypes);
  var TB_Docente = _TB_Docente(sequelize, DataTypes);
  var TB_Estudiante = _TB_Estudiante(sequelize, DataTypes);
  var TB_Estudiante_Acudiente = _TB_Estudiante_Acudiente(sequelize, DataTypes);
  var TB_Grupo = _TB_Grupo(sequelize, DataTypes);
  var TB_Laboratorio = _TB_Laboratorio(sequelize, DataTypes);
  var TB_Laboratorio_Grupo = _TB_Laboratorio_Grupo(sequelize, DataTypes);
  var TB_Materia = _TB_Materia(sequelize, DataTypes);
  var TB_Media = _TB_Media(sequelize, DataTypes);
  var TB_Premedia = _TB_Premedia(sequelize, DataTypes);
  var TB_Salon = _TB_Salon(sequelize, DataTypes);
  var TB_Usuario = _TB_Usuario(sequelize, DataTypes);

  TB_Usuario.belongsTo(TB_Administrador, { as: "Cedula_TB_Administrador", foreignKey: "Cedula"});
  TB_Administrador.hasMany(TB_Usuario, { as: "TB_Usuarios", foreignKey: "Cedula"});

  return {
    TB_Acudiente,
    TB_Administrador,
    TB_Doce_Mat_Grup,
    TB_Docente,
    TB_Estudiante,
    TB_Estudiante_Acudiente,
    TB_Grupo,
    TB_Laboratorio,
    TB_Laboratorio_Grupo,
    TB_Materia,
    TB_Media,
    TB_Premedia,
    TB_Salon,
    TB_Usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
