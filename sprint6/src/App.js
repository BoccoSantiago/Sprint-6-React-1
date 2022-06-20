import React from "react";
import Escena from "./components/escena/Escena";
import { ButtonsDiv, MainDiv } from "./components/escena/styled";
import { useState } from "react";
import { Nav } from "./components/escena/Nav";
import frases from "./components/escena/Frases";

function App() {
  
  const [count, setCount] = useState(1);

  function handleClick(i) {
    setCount(prevCount => {
      if (prevCount + i > frases.length || prevCount + i <= 0)
        return prevCount;
      return prevCount + i;
    })
  }
  
  console.log(count)
 

  return (
    <MainDiv>
    <ButtonsDiv>
      <Nav handleClick={handleClick}/> 
    </ButtonsDiv>
     <Escena numEscena={count}/>
    </MainDiv>
  );

 
}

export default App;
