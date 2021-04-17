const porta = 3003;//Uma porta é um processo dentro do computador.

const { response } = require( 'express' );
const express = require('express');
const app = express();
const bancoDeDados = require('./bancoDeDados');

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos());//Retorna a lista de produtos.
    
    // res.send({nome: 'Notebook', preco: 1234.56});//Envia uma resposta que é convertida para o formato JSON.
});

app.get('/produtos/:id', (req, res, next)=> {//Retorna um produto referente a id informada.
    res.send(bancoDeDados.getProduto(req.params.id));
});

app.post('/produtos', (req, res, next) => {//Salva o produto na memória.
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    });

    response.send(produto);//Converte o objeto produto em um JSON para ser enviado para a web.
});

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
});
