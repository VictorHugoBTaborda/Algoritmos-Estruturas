const Livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial){
      let maisBarato = posicaoInicial;

               //1
for (let atual = 0; atual < arrProdutos.length; atual++) {
      if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
      maisBarato = atual

      }
}
return maisBarato;
}

module.exports = menorValor;