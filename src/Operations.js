
import React, {useState, useEffect} from 'react';

function Game() {
    const [targVal, setTargVal] = useState(Math.floor(Math.random() * 100));
    const [startVal, setStartVal] = useState(Math.floor(Math.random() * 100));
    const [currOps, setCurrOps] = useState(0);
    const [winStage, setWinStage] = useState("");


    function addOne() {
        if (startVal < 100) {
            setStartVal(startVal + 1)
            setCurrOps(currOps + 1)

        }    
    }

    function subtractOne() {
        if (startVal > 0) {
            setStartVal(startVal - 1)
            setCurrOps(currOps + 1)
        }
      
    }

    function multiplyBy2() {
        if (startVal * 2 > 100) {
            setStartVal(100)
        } else {
            setStartVal(startVal * 2)
        }
        setCurrOps(currOps + 1)
        
       
    }

    function divideBy2() {
        if (Math.floor(startVal / 2) > 0) {
            setStartVal(Math.floor(startVal / 2))
            setCurrOps(currOps + 1)
        }
    }
    

    function checkMatch() {

        console.log("Beg S " + startVal)
        console.log("Beg T " + targVal)

        console.log(startVal - targVal)

        if (startVal === targVal) {
            setWinStage("Congratulations! You have reached the target value in " + currOps + " operation(s). Can you do better?")
        }
    }

    useEffect(() => {
        setWinStage("")
        checkMatch();
    }, [startVal]);

  

    function restartGame() {
       
        setTargVal(Math.floor(Math.random() * 100))
        setStartVal(Math.floor(Math.random() * 100))

        if (checkMatch()) {
            setTargVal(Math.floor(Math.random() * 100))
            setStartVal(Math.floor(Math.random() * 100))
        }
        setCurrOps(0)
    }
 
    return (    
        <div>
            <div className = "Target"> 
                <p>Target Number: </p>
                <p id = "targetNum"> {targVal} </p>
            </div>

            <div className = "Starting"> 
                <p id = "start">Starting Number:   </p>
                <p id = "startNum">{startVal} </p>
            </div>

            <p id = "numOper">Number of Operations: </p>
            <p id = "ops"> {currOps}</p>

            <button className = "Operations" onClick={addOne}>+1</button>
            <button className = "Operations" onClick={subtractOne}>-1</button>
            <button className = "Operations" onClick={multiplyBy2}>*2</button>
            <button className = "Operations" onClick={divideBy2}>÷2</button>
            <h2 id = "Win"> {winStage} </h2>
            <button id = "playAgain"  onClick={restartGame}>Play Again</button>
      
        </div>
      );
    }
    export default Game;
   

    