import React from "react";
import frases from "./Frases";
import {Border} from "./styled"

function Escena(props){

    return (
        <div> 
        {
            frases.map(frase => {
                return(
                    <div key={frase.id}>
                    <Border active={props.numEscena === frase.id}>{frase.text}</Border>
                    </div>  
                ) 
            })
        }
        </div>
        )   
}


export default Escena
        

    
