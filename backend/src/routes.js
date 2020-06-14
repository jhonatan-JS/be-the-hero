const express = require('express');

const routes = express.Router();

app.routes('/users', (request, response) => {
    const body = request.body;

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'jhonatan Santos'
    });
});

module.exports = routes;