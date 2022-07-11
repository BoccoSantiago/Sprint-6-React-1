import React from "react";
import { useState } from "react";
import Nav from "./components/escena/Nav"
import Escena from "./components/escena/Escena";
import { Background, ButtonsDiv } from "./components/escena/styled";
import frases from "./components/escena/Frases";
import "./styles.css"

function App() {

  const [count, setCount] = useState(1);
  const [isShown, setIsShown] = useState(true);

  function Welcome(){
    return(
      <div className="main">
          <h1>Bienvenidos</h1>
          <h3>Esta es la historia de nuestro heroe espacial, creado con ReactJS, utilizando .map(), props, useState, etc. </h3>
  
          <h4>Haga click en los botones Anterior y Siguiente para navegar por la historia.</h4>

          <button onClick={() => setIsShown(false)}>
              Comenzar
          </button>
    
      </div>
    )
  }

  function handleClick(i) {
    setCount((prevCount) => {
      if (prevCount + i > frases.length || prevCount + i <= 0) return prevCount;
      return prevCount + i;
    });
  }

  

  return (
    <div>
      {isShown ? (
         <Welcome />
      ) : (
        <Background image={frases[count - 1].img}>
        <ButtonsDiv>
          <Nav handleClick={handleClick} />
        </ButtonsDiv>
          <Escena numEscena={count} />
        </Background>
      )}
    </div>
  );
}


export default App;
