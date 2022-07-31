import React, { useState } from 'react';


function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

const Square = ({value, squares ,setSquares, swapTurn, setSwapTurn}) => {

    const handleBtnClick = (value) => {
        
        if (calculateWinner(squares) || squares[value]) {
            return;
          }
        const list = [...squares]
        list[value] = !swapTurn ? 'X' : '0';
        
        setSwapTurn(prevState => !prevState)
        setSquares(
             [...list]
        )
    }
    
    return (
        <button className="square" onClick={() => handleBtnClick(value)}>
          {squares[value]}
        </button>
      );
}

const Board = () => {
    const [ squares, setSquares] = useState(Array(9).fill(null))
    const [ swapTurn, setSwapTurn ] = useState(false)

    const winner = calculateWinner(squares);
    let status;

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = `Next player: ${!swapTurn ? 'X' : '0'}`;
    }

    const renderSquare = (i) => {
        return <Square value={i} squares={squares}  setSquares={setSquares} swapTurn={swapTurn} setSwapTurn={setSwapTurn} />;
    }
    
    

    return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      );
}
  
  
const Game = () => {
    return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
}

const App = () => {
    return <Game/>
}

export default App;