import { useState, useEffect } from 'react';
import { chocolate, dango, iceCream, lollipop, purpleCandy, blank } from './images';

const width = 8
const candyColors = [
  chocolate,
  dango,
  iceCream,
  lollipop,
  purpleCandy
]

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] =  useState([])
  const createBoard = () => {
    const randomColorArrangement = []
    for (let i = 0; i < width * width; i++) {
      const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
      randomColorArrangement.push(randomColor) 
    }    
    setCurrentColorArrangement[randomColorArrangement]
  }

  createBoard()  
  return (
    <div className="App">
      <div className="game">
      
      </div>
      <h1 className="score"></h1>
    </div>
  );
}

export default App;