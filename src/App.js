import React from "react"
import './App.css';

import  {addOne, subtractOne, multiplyBy2, divideBy2, restartGame} from "./Operations.js";

function App() {
  return (
    <div className="App">

    <h1 className = "Title"> Optimal Operations</h1>
    <body> 

      <div className = "Target"> 
        <p >Target Number:  </p>
        <p id = "targetNum"> </p>
      </div>
       
      <div className = "Starting"> 
        <p id = "start">Starting Number:   </p>
        <p id = "startNum"> </p>
      </div>

        <p id = "numOper">Number of Operations: </p>
        <p id = "ops"> 0</p>
        <button className = "Operations" onClick={addOne}> +1</button>
        <button className = "Operations" onClick={subtractOne}> -1</button>
        <button className = "Operations" onClick={multiplyBy2}> *2</button>
        <button className = "Operations" onClick={divideBy2}> ÷2</button>

        <h2 id = "Win"> </h2>
        <button id = "playAgain" onClick={restartGame}> Play Again</button>
    </body>
    
    </div>
  );
}

export default App;
