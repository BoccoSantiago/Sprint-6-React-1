import React from "react";
import frases from "./Frases";
import {Border} from "./styled"

function Escena(){
    return (
        <div> 
        {
            frases.map(frase => {
                return(
                    <div key={frase.id}>
                    <Border>{frase.text}</Border>
                    </div>  
                )
            })
        }
        </div>
        )   
}


export default Escena
        

    
