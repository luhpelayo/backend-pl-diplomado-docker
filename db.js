const Sequelize = require('sequelize'); // Usa require en lugar de import
const dotenv = require('dotenv');

dotenv.config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME
});

module.exports = sequelize; // Exporta la instancia de Sequelize
