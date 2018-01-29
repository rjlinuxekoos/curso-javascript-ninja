(
function(){/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {name     : 'Rider',
			  lastname : 'Nunes',
			  age      :31};
console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
var livro1 = {name : 'Livro1',
              pages : 200};
var livro2 = {name : 'Livro2',
              pages : 300};
var livro3 = {name : 'Livro3',
              pages : 400};
books.push(livro1);
books.push(livro2);
books.push(livro3);

console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
for (var obj in books){
	console.log(books[obj].name);
}


console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
var livro_removido = books.pop();
console.log(livro_removido.name);

console.log( '\nAgora sobraram somente os livros:' );

/*
Mostre no console os livros restantes.
*/
for (var obj in books){
	console.log(books[obj].name);
}

/*
Converta os objetos que ficaram em `books` para strings.
*/
books = JSON.stringify(books);
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
console.log(books);

/*
Converta os livros novamente para objeto.
*/
books = JSON.parse(books);
console.log( '\nAgora os livros são objetos novamente:' );


/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for( var i = 0; i < Object.keys(books).length; i++ ){
	for (var k in books[i]){
		console.log(k + ': ' + books[i][k]);
	}
	

}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['R', 'I', 'D', 'E', 'R'];

console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(''));

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log(myName.reverse().join(''));

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(myName.sort());
}
)();