//EXERCÍCIO 1
/*
a) Acessamos os parâmetros passados através do process.argv
*/

/*
b)

const nome = "Igor"
const idade = Number('27')

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
*/

/*
c)

const nome = "Igor"
const idade = Number('27')
const novaIdade = Number(idade + 7)

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade} anos.`)*/


//EXERCÍCIO 2

/*
const num1 = 10
const num2 = 5

console.log(`Resposta: ${num1 + num2}`)
console.log(`Resposta: ${num1 - num2}`)
console.log(`Resposta: ${num1 * num2}`)
console.log(`Resposta: ${num1 / num2}`)

*/


//EXERCÍCIO 3

const tarefa = process.argv[2]
const lista = ['Tomar banho']

lista.push(tarefa)
console.log(`Tarefa adicionada com sucesso: ${lista}`)