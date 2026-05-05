const livros = require('./listaLivros');

function insertionSort(lista){

    for (let atual = 0; atual < lista.length; atual++){
        let analise = atual;
        while (lista[analise].preco < lista[analise - 1].preco){

         let livroAtual = livros [atual];
         let livroMenorPreco = livros [menor];
         livros [atual] = livroMenorPreco
         livros [menor] = livroAtual
   
        }
    }

    console.log(lista);

}