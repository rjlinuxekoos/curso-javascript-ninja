/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrList = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArrList(param_arrList){
	return param_arrList;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArrList(arrList)[1]);//2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function retornaArrList2(param_arrList, indice){
	return param_arrList[indice];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrList2 = [1, true, 'rider', [1, 2, 3], {prop1: 5, prop2: 'teste'} ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaArrList2(arrList2, 0));
console.log(retornaArrList2(arrList2, 1));
console.log(retornaArrList2(arrList2, 2));
console.log(retornaArrList2(arrList2, 3));
console.log(retornaArrList2(arrList2, 4));


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){
	 var livros = {
	 	livro1 : {
	 		quantidadePaginas : 100,
	 		autor             : 'Autor1',
	 	    editora           : 'Edit1'
	 	},
	 	livro2 : {	
	 		quantidadePaginas : 200,
	 		autor             : 'Autor2',
	 	    editora           : 'Edit3'},
	 	livro3 : {
	 		quantidadePaginas : 400,
	 		autor             : 'Autor3',
	 	    editora           : 'Edit3'
	 	}
	 }
	 if (!nomeLivro){
	 	return livros;
	 }
	 return livros[ nomeLivro ];
	  
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();//

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro livro2 tem ' + book('livro2').quantidadePaginas + '!'); //O livro livro2 tem 200!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro livro3 é ' + book('livro3').autor + '.'); //O autor do livro livro3 é Autor3.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro livro1 foi publicado pela editora ' + book('livro1').editora + '.'); //O livro livro1 foi publicado pela editora Edit1.