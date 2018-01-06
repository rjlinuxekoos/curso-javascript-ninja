/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calculateSum(x, y){
	return(x + y);
}

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
console.log("A soma de 5 e 10 é igual a " + sum(5, 10) + ".");// 15

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log("O nome a função que faz a soma é " + sum.name + ".");// calculateSum

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName(){
	return "Rider";
}// Rider

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
var varShowName = showName;// 

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log("A função " + varShowName.name + " retorna " + varShowName() + ".");// A função showName retorna Rider

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
function calculator(operador){
	if  ((operador !== "+") &&
		(operador !== "-") &&
		(operador !== "*") &&
		(operador !== "/") &&
		(operador !== "%")){
		return "Operação inválida";
	}

	var outraFuncao = function(x, y){
		var retorno = null;
		switch(operador){
			case "+": retorno =(x+y);
				       break;
			case "-": retorno =(x-y);
				       break;
			case "*": retorno =(x*y);
				       break;
			case "/": retorno =(x/y);
				       break;
			case "%": retorno =(x%y);
				       break;
			default : return("Operação inválida");	       
		};
		return "Resultado da operação: " + x + " " + operador + " " + y + " = " + (retorno)  + ".";


	}
	return outraFuncao;

}
// 

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
var sum = calculator("+");// [Function: outraFuncao]

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum(1,2));// Resultado da operação: 1 + 2 = 3.

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var subtraction    = calculator("-");
var multiplication = calculator("*");
var division       = calculator("/");
var mod            = calculator("%");

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log(subtraction(2,1));// Resultado da operação: 2 - 1 = 1.
console.log(multiplication(2,3));// Resultado da operação: 2 * 3 = 6.
console.log(division(10,2));// Resultado da operação: 10 / 2 = 5.
console.log(mod(4,2));// Resultado da operação: 4 % 2 = 0.