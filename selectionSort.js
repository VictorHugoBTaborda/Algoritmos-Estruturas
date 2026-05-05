const livros = require('./listaLivros');
const menorValor = require('./menorValor');


for (let atual = 0; atual < livros.length; atual++) {
 let menor = menorValor(livros, atual)   

let livroAtual = livros[atual];
console.log('livro atual', livros[atual])
let livroMenorpreco = livros[menor];
console.log('livro menor preço', livros[menor])

livros[atual] = livroMenorPreco
livro[menor] = livroAtual
}

console.log(livros)