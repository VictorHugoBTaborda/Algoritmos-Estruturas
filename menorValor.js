const Livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial){
      let maisBarato = 0;

for (let atual = 0; atual < arrProdutos.length; atual++) {
      if(arrProdutos[atual].preco < arrProdutos[maisBarato]){
      maisBarato = atual

      }
}
return maisBarato;
}

module.exports = menorValor;