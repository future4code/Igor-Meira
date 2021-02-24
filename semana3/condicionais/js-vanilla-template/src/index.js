//Exercícios de interpretação de código

//EXERCÍCIO 1

/*O código a seguir verifica se o resto da divisão do 
número escolhido por 2 é igual a zero. No caso isso só
acontecerá quando forem números pares.
Os números que não passam no teste são os ímpares, peos motivos
expostos a cima. */


//EXERCÍCIO 2

//A. Serve para distinguir dentre as opções a fruta escoolhida pelo usuário

//B. O preço da fruta Maçã é R$  2.25

//C. O preço da fruta  Pêra  é  R$  5


//EXERCÍCIO 3

//A. Está solicitando um número ao usuário e convertendo o valor de string para number.

//B. Esse número passou no teste. 
//No caso de alterar para -10 não condição para numero < 0

//C. O comando console.log não consegue ler a mensagem 
//pois toda variável criada em um escopo de um bloco independente
//lá permanece. O escopo filho não compartilha suas variáveis.


//Exercício de escrita de código

//EXERCÍCIO 4

//1.

/*

const idade = Number(prompt('Digite sua idade'))

if (idade >= 18) {
    console.log('Você pode dirigir!')
} else {
    console.log('Você não pode dirigir')
}

*/

//EXERCÍCIO 5

//matutino = 'M';
//vespertino = 'V';
//noturno = 'N';

/*const periodo = prompt(
'Qual período vc estuda?  M = matutino, V = vespertino e N = noturno.')

if (periodo === 'M') {
    console.log('Bom Dia!')
} else if (periodo === 'V') {
    console.log('Boa Tarde!')
} else if (periodo === 'N') {
    console.log('Boa Noite!')
}
*/


//EXERCÍCIO 6

/*const periodo = prompt('Qual período vc estuda?  M = matutino, V = vespertino e N = noturno.')
    
    switch(periodo) {
        case 'M':
            console.log('Bom Dia!')
        break

        case 'V':
            console.log('Boa Tarde!')
        break

        case 'N':
            console.log('Boa Noite!')
        break

        default:
            console.log('Digite um período válido.')
    }
    */


//EXERCÍCIO 7


/*const genero = prompt('Escolha o gênero do filme')
const preco = Number(prompt('Qual o valor máximo que você pagaria pelo ingresso?'))

if (genero === 'fantasia' && preco < 15) {
    console.log('Bom filme!')

} else { 
    console.log('Escolha outro filme:(')

}
*/






