const express = require('express');

const routes = express.Router();

routes.post('/users/:id', (request, response) => {
  const params = request.body;

  console.log(params);
  
  return response.send({
    evento: 'Semana Omnistack 11.0',
    aluno: 'Paulo Vítor'
  });
});

module.exports = routes;