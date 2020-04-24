const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');

// Conectando com banco de dados
const connection = new Sequelize(dbConfig);

// conectando model User com o banco de dados
User.init(connection);
Address.init(connection);
Tech.init(connection);

// iniciando associações das tabelas users, addresses e tech
User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;
