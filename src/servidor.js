const porta = 3003;//Uma porta é um processo dentro do computador.

const express = require('express');
const app = express();

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 1234.56});//Envia uma resposta que é convertida para o formato JSON.
});

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
});
