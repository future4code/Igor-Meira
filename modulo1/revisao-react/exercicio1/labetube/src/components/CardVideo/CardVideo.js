import React from "react"

export const CardVideo = (props) => {
    return (
        <div className="box-pagina-principal">
              <img src={props.img} alt=""/>
              <h4>{props.titulo}</h4>
            </div>
    )
}