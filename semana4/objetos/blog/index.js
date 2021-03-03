
function adicionaNoArray(){
let tituloPostagem = document.getElementById("titulo-post")
let autorPostagem = document.getElementById("autor-post")
let conteudoPostagem = document.getElementById("conteudo-post")

const postagem = {
    titulo: tituloPostagem.value,
    autor: autorPostagem.value,
    conteudo: conteudoPostagem.value,

    }

    let arrayTudao = []
        arrayTudao.push(postagem)
        console.log(arrayTudao)

        let containerDePosts = document.getElementById("container-de-posts")
            containerDePosts.innerHTML += `<section><h1 class="titulo">${postagem.titulo}</h1> 
            <div class="autor">${postagem.autor}</div> <p class="conteudo">${postagem.conteudo}</p></section>`



            const apertouBotao = () => {
                let valorInput = document.getElementById("botaoEnter")
                let containerDePosts = document.getElementById("container-de-posts")
                containerDePosts.innerHTML += `<p>${valorInput.value}</p>`
                console.log(valorInput.value)
                valorInput.value =''
            }
            
}

const pressionouEnter = (event) => {
    if(event.key === "Enter")
    apertouBotao()
}

/*
const apertouBotao = () => {
    let valorInput = document.getElementById("botaoEnter")
    let containerDePosts = document.getElementById("container-de-posts")
    containerDePosts.innerHTML += `<p>${valorInput.value}</p>`
    console.log(valorInput.value)
    valorInput.value =''
}
*/