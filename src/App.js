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
  const [scoreDisplay, setScoreDisplay] = useState(0)

  const checkForCOlumnOfFive = () => {
    for (let i =0; i< 32; i++) {
        const columnOfFive = [i, i + width, i + width * 2, i + width * 3, i + width *4]
        const decidedColor = currentColorArrangement[i]
        const isBlank = currentColorArrangement[i] === blank

        if (columnOfFive.every(square => currentColorArrangement[square] === decidedcolor && !isBlank)) {
          columnOfFive.forEach(square => currentColorArrangement[square] = blank)
          setScoreDisplay((score) => score +1)
          return true
        }
    }
   }

  const checForRowOfFive = () => {

  }

  const createBoard = () => {
    const randomColorArrangement = []
    for (let i = 0; i < width * width; i++) {
      const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
      randomColorArrangement.push(randomColor) 
    }    
    setCurrentColorArrangement[randomColorArrangement]
  }
  useEffect(() => {
  createBoard()
  }, [])

  return (
    <div className="App">
      <div className="game">
          {setCurrentColorArrangement.map((candyColor, index) => (
            <img
              key={index} 
              src={candyColor} 
              alt={candyColor} 
              data-id={index}
              draggable={true}
              />
          ))}      
      </div>
      <h1 className="score"></h1>
    </div>
  );
}

export default App;