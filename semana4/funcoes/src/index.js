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
let nome = "Igor"
let idade = 27
let cidade = "São Paulo"
let souEstudante = "sou estudante"

function quemSouEu(){
        console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos, moro em ' + cidade + ' e ' + souEstudante)

    } 
    
quemSouEu()
*/


//b.
/*
function informacao(nome, idade, cidade, souEstudante){
    if(souEstudante === true){
        souEstudante = "sou estudante"
    } else{
        souEstudante = "não sou estudante"
    }
    return 'Meu nome é ' + nome + ', tenho ' + idade + ' anos, moro em ' + cidade + ' e ' + souEstudante
};

console.log(informacao('Igor', 27, 'São Paulo', true)) 
*/


//EXERCÍCIO 5

//.a
/*
function adicao(num1, num2){
    const adicao = num1 +num2
    return adicao
}

console.log('Soma é igual a: ', adicao(10, 12));


//b.

function comparador(num1, num2){
    let maiorQue = num1 > num2
    return maiorQue
}

console.log('O primeiro número é maior: ', comparador(15, 13))

//c.

function replicaMensagem(mensagem){
    for(let i = 0; i < 10; i++){
        console.log(mensagem)
    }
}

replicaMensagem('Tomara que esteja repetindo a mensagem');
*/


//EXERCÍCIO 6

//const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//a.
/*
function calculoNumeros(arrayNumeros){
    return arrayNumeros.length
}

console.log('Total de numeros: ', calculoNumeros(array))
*/


//b.
/*
function numeroPar(numero){
    let par;
    if(numero % 2 === 0){
        par = true
    } else {
        par = false  
    }
    return par
}

console.log('Número par: ', numeroPar(18))
*/

//c.
/*
function quantidadeNumerosPares(arrayDeNumeros){
    let numerosPares = []
    for(const numero of arrayDeNumeros){
        if(numero % 2 === 0){
            numerosPares.push(numero)
        }
    }
    return numerosPares.length
}

console.log("Numeros Pares: ", quantidadeNumerosPares(array))
*/

//d.
/*
function quantidadeNumerosParesOutra(arrayDeNumeros){
    let numerosPares = [];
    for(const numero of arrayDeNumeros){
        if(quantidadeNumerosParesOutra(numero)){
            numerosPares.push(numero)
        }
    }
    return numerosPares.length
}

console.log("Numeros Pares: ", quantidadeNumerosParesOutra(array)) 
*/