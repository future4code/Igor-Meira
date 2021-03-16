import React from 'react'

export default class Epata1 extends React.Component {
render(){
return(
    <div>
        <form>
        <div>
            <label for="name">1. Qual o seu nome?</label>
            <input type="text" id="name" />
        </div>

        <div>
            <label for="idade">2. Qual sua idade?</label>
            <input type="text" id="idade" />
        </div>

        <div>
            <label for="mail">3. Qual seu email?</label>
            <input type="text" id="mail" />
        </div>

        <div>
            <label for="escolaridade">4. Qual a sua escolaridade?</label>
            <select id="ensino">
                <option value="medioCompleto">Ensino médio completo</option>
                <option value="medioIncompleto">Ensino médio incompleto</option>
                <option value="superiorCompleto">Ensimo superior completo</option>
                <option value="superioIncompleto" selected>Ensimo superior incompleto</option>
            </select>
        </div> 
        </form>

    </div>

)
}
}