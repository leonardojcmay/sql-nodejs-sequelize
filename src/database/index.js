const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');

// Conectando com banco de dados
const connection = new Sequelize(dbConfig);

// conectando model User com o banco de dados
User.init(connection);
Address.init(connection);

// associando as duas tabelas users e addresses
Address.associate(connection.models);

module.exports = connection;
