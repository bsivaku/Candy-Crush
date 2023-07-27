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

  const checkForColumnOfFive = () => {
    for (let i = 0; i < 32; i++) {
        const columnOfFive = [i, i + width, i + width * 2, i + width * 3, i + width * 4]
        const decidedColor = currentColorArrangement[i]
        const isBlank = currentColorArrangement[i] === blank

        if (columnOfFive.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
            setScoreDisplay((score) => score + 1)
            columnOfFive.forEach(square => currentColorArrangement[square] = blank)
            return true
        }
    }
}

const checkForRowOfFive = () => {
    for (let i = 0; i < 64; i++) {
        const rowOfFive = [i, i + 1, i + 2, i + 3, i + 4]
        const decidedColor = currentColorArrangement[i]
        const notValid = [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55, 61, 62, 63, 64]
        const isBlank = currentColorArrangement[i] === blank

        if (notValid.includes(i)) continue

        if (rowOfFive.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
            setScoreDisplay((score) => score + 1)
            rowOfFive.forEach(square => currentColorArrangement[square] = blank)
            return true
        }
    }
}

const checkForColumnOfFour = () => {
    for (let i = 0; i < 40; i++) {
        const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
        const decidedColor = currentColorArrangement[i]
        const isBlank = currentColorArrangement[i] === blank

        if (columnOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
            setScoreDisplay((score) => score + 1)
            columnOfFour.forEach(square => currentColorArrangement[square] = blank)
            return true
        }
    }
}

const checkForRowOfFour = () => {
    for (let i = 0; i < 64; i++) {
        const rowOfFour = [i, i + 1, i + 2, i + 3]
        const decidedColor = currentColorArrangement[i]
        const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]
        const isBlank = currentColorArrangement[i] === blank

        if (notValid.includes(i)) continue

        if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
            setScoreDisplay((score) => score + 1)
            rowOfFour.forEach(square => currentColorArrangement[square] = blank)
            return true
        }
    }
}

const checkForColumnOfThree = () => {
    for (let i = 0; i < 48; i++) {
        const columnOfThree = [i, i + width, i + width * 2]
        const decidedColor = currentColorArrangement[i]
        const isBlank = currentColorArrangement[i] === blank

        if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
            setScoreDisplay((score) => score + 1)
            columnOfThree.forEach(square => currentColorArrangement[square] = blank)
            return true
        }
    }
}

const checkForRowOfThree = () => {
    for (let i = 0; i < 64; i++) {
        const rowOfThree = [i, i + 1, i + 2]
        const decidedColor = currentColorArrangement[i]
        const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]
        const isBlank = currentColorArrangement[i] === blank

        if (notValid.includes(i)) continue

        if (rowOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
            setScoreDisplay((score) => score + 1)
            rowOfThree.forEach(square => currentColorArrangement[square] = blank)
            return true
        }
    }
}

const moveIntoSquareBelow = () => {
  for (let i = 0; i <56; i++) {
    const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
    const isFirstRow = firstRow.includes(i)

    if (isFirstRow && currrentColorArrangement[i] === blank) {
      let randomNumber = Math.floor(Math.random() * candyColors.length)
      currentColorArrangement[i]
    }
  }
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