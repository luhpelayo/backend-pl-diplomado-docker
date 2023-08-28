const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const Usuario = sequelize.define('usuarios', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  fone: {
    type: DataTypes.STRING(255),
  },
  data_nascimento: {
    type: DataTypes.DATE,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true, // Permite valor nulo
    defaultValue: DataTypes.NOW, // Rellena automáticamente con la fecha actual
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true, // Permite valor nulo
    defaultValue: DataTypes.NOW, // Rellena automáticamente con la fecha actual
  },
});

module.exports = Usuario;
