import React from "react";



export function Nav(props){

return(   
    <div>
        <button onClick={()=> props.handleClick(-1)}> Anterior</button>
        <button onClick={()=> props.handleClick(1)}> Siguiente</button>
    </div> 
)
}