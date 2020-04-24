const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');

// Conectando com banco de dados
const connection = new Sequelize(dbConfig);

// conectando model User com o banco de dados
User.init(connection);

module.exports = connection;
