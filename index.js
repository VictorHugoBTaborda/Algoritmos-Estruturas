const Livros = require('./listaLivros');

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
      if(livros[atual].preco < livros[maisBarato]){
      maisBarato = atual

      }
}

console.log('O livro mais barato custa ${precosLivros[maisBarato]')