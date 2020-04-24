const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

// Rota de cadastro de usuarios
routes.post('/users', UserController.store);

module.exports = routes;