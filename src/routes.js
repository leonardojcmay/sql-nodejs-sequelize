const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');

const routes = express.Router();

// Rota de listagem de usuarios
routes.get('/users', UserController.index);
// Rota de cadastro de usuarios
routes.post('/users', UserController.store);

// Listando endereços especificos de um usuario
routes.get('/user/:user_id/addresses', AddressController.index);
// Rota de cadastro de endereços
routes.post('/user/:user_id/addresses', AddressController.store);

// Listando techs especificas de um usuario
routes.get('/user/:user_id/techs', TechController.index);
// Rota de cadastro de techs
routes.post('/user/:user_id/techs', TechController.store);
// Rota de deletar uma tech
routes.delete('/user/:user_id/techs', TechController.delete);


module.exports = routes;