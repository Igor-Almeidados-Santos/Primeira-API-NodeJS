const porta = 3003;//Uma porta é um processo dentro do computador.

const express = require('express');
const app = express();
const bancoDeDados = require('./bancoDeDados');

app.use(express.urlencoded({extended: true}));//Executa um parser no body da requisição caso este tenha um padrão url encoded transforma em um objeto.

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos());//Retorna a lista de produtos.
    
    // res.send({nome: 'Notebook', preco: 1234.56});//Envia uma resposta que é convertida para o formato JSON.
});

app.get('/produtos/:id', (req, res, next)=> {//Retorna um produto referente a id informada.
    res.send(bancoDeDados.getProduto(req.params.id));
});

app.post('/produtos', (req, res, next) => {//Salva o produto na memória.
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    });

    res.send(produto);//Converte o objeto produto em um JSON para ser enviado para a web.
});

app.put('/produtos/:id', (req, res, next) => {//Substitui um produto por outro no id informado.
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    });

    res.send(produto);
});

app.delete('/produtos/:id', (req, res, next) => {//Deleta um produto de id informado.
    const produto = bancoDeDados.excluirProduto(req.params.id);
    res.send(produto);
});


app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
});
