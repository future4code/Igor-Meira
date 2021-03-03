function criarTarefa() {

const tarefa = document.getElementById('tarefa')
const semana = document.getElementById('dias-semana')
const adcionar = document.getElementById(semana.value)

if(tarefa.value !== ''){
    adcionar.innerHTML += `<p>${tarefa.value}</p>`
    tarefa.value = ''
    } else {
        alert ('Crie uma tarefa.')
    }

}





