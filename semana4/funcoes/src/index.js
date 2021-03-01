//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS

//EXERCÍCIO 1
/* 

a. Vai ser impresso no console o valor da função e depois multiplicado por 5.

b. não apaarece nada no console. 

*/


//EXERCÍCIO 2

/*

a. Estão sendo impressos o primeiro e segundo elemento do arrayDeNomes

b. Amanda e Caio

*/


//EXERCÍCIO 3
/* 
O código em questão retorna o valor de x multiplicado por ele mesmo se x 
multiplicado por 2 tiver o resto 0. Alteraria para arrayInicio.
*/


//EXERCÍCIO DE ESCRITA DE CÓDIGO

//EXERCÍCIO 4 

//a.

/*
let quemSouEu = function(lista) {
    for(item of lista) {
        console.log(item)
    }
    return lista
}

const resposta = quemSouEu (["Eu Sou Igor", "Tenho 27 anos", "moro em São Paulo", "E sou estudante"])

*/

//b.

let nome = "Igor"
let idade = 27
let cidade = "São Paulo"
let souEstudante = true

let quemSouEu = function (nome, idade, cidade, souEstudante ) {
        if(souEstudante === true)
        console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos, moro em ' + cidade + ' e sou estudante')    
    } 
    