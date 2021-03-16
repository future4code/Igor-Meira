import React from 'react'

export default class Epata3 extends React.Component {
render(){
return(
    <div>
        <form>
        <div>
            <label for="graduacao">5. Por que você nãoa terminou um curso de graduação?</label>
            <input type="text" id="graduacao" />
        </div>

        <div>
            <label for="complementar">6. Você fez algum curso complementar?</label>
            <select id="curso">
                <option value="tecnino">Curso técnico</option>
                <option value="ingles">Curso de Inglês</option>
                <option value="nãoFez">Não fiz curso complementar</option>
            </select>
        </div>
        </form>

    </div>
)
}
}