/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Bem-vindo(a) ao jogo de Blackjack')

let partida = confirm('Quer iniciar uma nova rodada?')

if (partida) {

   let jogadorCarta1 = comprarCarta()
   let jogadorCarta2 = comprarCarta()

   let computadorCarta1 = comprarCarta()
   let computadorCarta2 = comprarCarta()

   let placarJogador = jogadorCarta1.valor + jogadorCarta2.valor
   let placarComputador = computadorCarta1.valor + computadorCarta2.valor

   console.log('Jogador cartas: ' + jogadorCarta1.texto + jogadorCarta2.texto, 'pontos', +  placarJogador)
   console.log('Computador cartas: ' + computadorCarta1.texto + computadorCarta2.texto, 'pontos', +  placarComputador)

   let sortear = []

      while(sortear) {

         if (jogadorCarta1 == "A" && jogadorCarta2 == "A")
         console.log('Jogador cartas: ' + jogadorCarta1.texto + jogadorCarta2.texto, 'pontos', +  placarJogador)
         console.log('Computador cartas: ' + computadorCarta1.texto + computadorCarta2.texto, 'pontos', +  placarComputador)

         } if (computadorCarta1 == "A" && computadorCarta2 == "A") 
         console.log('Jogador cartas: ' + jogadorCarta1.texto + jogadorCarta2.texto, 'pontos', +  placarJogador)
         console.log('Computador cartas: ' + computadorCarta1.texto + computadorCarta2.texto, 'pontos', +  placarComputador)








      if (placarJogador > placarComputador) {
            console.log('VOCÊ GANHOU!')
         
   }  else if (placarComputador > placarJogador) {
            console.log('O COMPUTADOR GANHOU!')
   }  else if (placarJogador === placarComputador) {
            console.log('HOUVE UM EMPATE!!!')
   }     
   
            }else {console.log('O jogo acabou')} 