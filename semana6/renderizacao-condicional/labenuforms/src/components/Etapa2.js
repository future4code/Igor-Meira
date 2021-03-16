import React from 'react'

export default class Epata2 extends React.Component {
render(){
return(
    <div>
        <form>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <div>
            <label for="curso">5. Qual curso?</label>
            <input type="text" id="curso" />
        </div>

        <div>
            <label for="unidade">6. Qual a unidade de ensino?</label>
            <input type="text" id="unidade" />
        </div>
        </form>

    </div>
)
}
}