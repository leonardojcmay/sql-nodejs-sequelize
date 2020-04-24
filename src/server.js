const express = require('express');
// importando as rotas
const routes = require('./routes');

// importando banco de dados para ter comunicação com a aplicação
require('./database');

const app = express();

// para saber lidar com requisições vindas no formato JSON
app.use(express.json());

app.use(routes);

app.listen(3333);