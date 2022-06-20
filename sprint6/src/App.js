import React from "react";
import Escena from "./components/escena/Escena";
import { ButtonsDiv, MainDiv } from "./components/escena/styled";
import { useState } from "react";
import frases from "./components/escena/Frases"

function App() {
  
  const [count, setCount] = useState(0);

  function clickPrev() {
    console.log(count)
    setCount(prevCount => prevCount - 1)
    
   if(count < frases.length  && count >= 0 ){ 
    console.log(frases[count].text)
    } 
  }
  function clickNext() {
    console.log(count)
    setCount(prevCount => prevCount + 1)


     if(count < frases.length  && count >= 0 ) {
    console.log(frases[count].text)}
  
  }
 

  return (
    <MainDiv>
      count: {count}
      <ButtonsDiv>
        <button onClick={clickPrev} /* disabled={count === 0} */> Anterior</button>
        <button onClick={clickNext} /* disabled={count > frases.length - 1 } */> Siguiente</button>
      </ButtonsDiv>
     <Escena/>
    </MainDiv>
  );
}

export default App;
