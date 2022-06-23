import React from "react";
import { useState } from "react";
import Nav from "./Nav";
import Escena from "./Escena";
import { ButtonsDiv } from "./styled";
import frases from "./Frases";



export default function Welcome() {
  const [count, setCount] = useState(1);
  
  function WelcomeMain(){
    return(
      <div>
          <h1>Bienvenidos</h1>
          <h3>Esta es la historia de nuestro heroe, creado con ReactJS, utilizando .map(), props, useState, etc. </h3>
  
          <h4>Haga click en los botones Anterior y Siguiente para navegar por la historia.</h4>
          <ButtonsDiv> 
          <button onClick={() => setIsShown(false)}>
              Comenzar
          </button>
          </ButtonsDiv> 
      </div>
    )
  }

  function handleClick(i) {
    setCount((prevCount) => {
      if (prevCount + i > frases.length || prevCount + i <= 0) return prevCount;
      return prevCount + i;
    });
  }

  console.log(count);
  const [isShown, setIsShown] = useState(true);

  return (
    <div>
      {isShown ? (
          <WelcomeMain/>
      ) : (
      <div>
        <ButtonsDiv>
          <Nav handleClick={handleClick} />
        </ButtonsDiv>
          <Escena numEscena={count} />
      </div>
      )}
    </div>
  );
}
