const sequence ={
    __id: 1,
    get id(){ return this.__id++ }
};

const produtos = {};

//Esta função salva o produto do banco de dados no objeto produto.
function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id;//Verifica se id de produto está setado, se não ele adiciona o id retornado do metodo no objeto sequence.
    produtos[produto.id] = produto;//Aqui adiciona o produto na lista/objeto produtos.
    return produto;
};

function getProduto(id) {//Retorna o produto referente ao id informado se não encontrar retorna um objeto vazio.
   return produtos[id] || {}; 
};

function getProdutos() {//Retorna todos os produtos dentro do objeto produtos.
    return Object.values(produtos);
};

function excluirProduto(id) {//Retorna todos os produtos dentro do objeto produtos.
    const produto = produtos[id];
    delete produtos[id];
    return produto
};

module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto};//Deixa estas funções viziveis para usar em outros módulos.