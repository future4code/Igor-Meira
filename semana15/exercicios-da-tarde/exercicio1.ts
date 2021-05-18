//console.log("hello, world!")

//a) Não possível pois numeros não se encaixam como string, uma vez que o valor dela foi atribuído somente como string.

const minhaString: string = "49"
//console.log(minhaString)

//b) Colocando " | string " após o number.

const meuNumero: number | string = "100"
//console.log(meuNumero)
//c) 

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const igor: pessoa = {
    nome: 'Igor',
    idade: 27,
    corFavorita: 'azul'
}

const iago: pessoa = {
    nome: 'Iago',
    idade: 25,
    corFavorita: 'vermelho'
}

const lidiane: pessoa = {
    nome: 'Lidiane',
    idade: 31,
    corFavorita: 'rosa'
}

const celio: pessoa = {
    nome: 'Celio',
    idade: 56,
    corFavorita: 'verde'
}
//console.log(pessoa)


//d) 

