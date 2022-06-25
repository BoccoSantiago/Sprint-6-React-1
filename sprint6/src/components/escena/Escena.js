import React from "react";
import frases from "./Frases";
import {Paragraph} from "./styled" 


function Escena(props){
    console.log(props)
    const paragraph = frases.map(frase => {
        return(
            <div key={frase.id}>
            <Paragraph active={props.numEscena === frase.id}>{frase.text}</Paragraph>
            </div> 
        ) 
    })
    
    return (
        <div> 
        {paragraph}
        </div>
        )   
}


export default Escena
        

    
