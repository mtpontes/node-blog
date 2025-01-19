const express = require('express');
const routes = require('./src/api/routes');
const ErrorHandler = require('./src/api/ErrorHandler');

const app = express();
const port = 3001;

routes(app); // Aplica rotas
app.use(ErrorHandler.handle); // Trata qualquer erro que for lançado como uma resposta adequada ao cliente
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app;
