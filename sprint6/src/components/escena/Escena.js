import React from "react";
import frases from "./Frases";

function Escena(){
    return (
        <div>
        {
            frases.map(frase => {
                return(
                    <div key={frase.id}>
                     <p> {frase.text}</p>  
                    </div>
                )
            })
        }
        </div>
        )   
}


export default Escena
        

    
