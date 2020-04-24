const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

const routes = express.Router();

// Rota de listagem de usuarios
routes.get('/users', UserController.index);
// Rota de cadastro de usuarios
routes.post('/users', UserController.store);

// Listando endereços especificos de um usuario
routes.get('/user/:user_id/addresses', AddressController.index);
// Rota de cadastro de endereços
routes.post('/user/:user_id/addresses', AddressController.store);

module.exports = routes;