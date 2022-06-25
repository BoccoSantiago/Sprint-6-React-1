import React from "react";
import frases from "./Frases";
import {Paragraph} from "./styled" 


function Escena(props){
    console.log(props)

    return (
        <div> 
        {
            frases.map(frase => {
                return(
                    <div key={frase.id}>
                    <Paragraph active={props.numEscena === frase.id}>{frase.text}</Paragraph>
                    </div> 
                ) 
            })
        }
        </div>
        )   
}


export default Escena
        

    
