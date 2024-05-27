import { useState } from 'react';
import Square from './Square';
import { calculateWinner } from '../../helper/calculateWinner';

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  //   const [nextPlayer, setCheckWinner] = useState(null);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = 'X') : (nextSquares[i] = 'O');
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let gameWinner;
  let nextPlayer;
  if (winner) {
    gameWinner = winner;
    nextPlayer = null;
  } else {
    nextPlayer = xIsNext ? 'X' : 'O';
    gameWinner = 'None';
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <>
      <h3>Winner: {gameWinner}</h3>
      {nextPlayer ? <h3>Next player: {nextPlayer}</h3> : null}
      <button
        style={{
          backgroundColor: 'pink',
          border: 'none',
          outline: 'none',
          padding: '10px 15px',
          borderRadius: '5px',
          marginBottom: '10px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
        onClick={resetGame}
      >
        Reset Game
      </button>
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
