const express = require('express');
const routes = require('./src/api/routes');

const app = express();
const port = 3001;

routes(app);
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app;