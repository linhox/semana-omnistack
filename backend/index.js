const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.send({
    evento: 'Semana Omnistack 11.0',
    aluno: 'Paulo Vítor'
  });
});

app.listen(3333);