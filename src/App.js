import React from "react"
import './App.css';
import Game from './Operations.js'

//import  {addOne, subtractOne, multiplyBy2, divideBy2, restartGame} from "./Operations.js";

function App() {
  return (
    <div className="App">

    <h1 className = "Title"> Optimal Operations</h1>
    <Game/>
    </div>
  );
}

export default App;
