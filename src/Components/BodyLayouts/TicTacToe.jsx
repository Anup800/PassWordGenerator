import { useState } from 'react';

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(board) {
  for (const [a, b, c] of winningCombos) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = getWinner(board);
  const isDraw = !winner && board.every((cell) => cell !== null);

  const handleCellClick = (index) => {
    if (board[index] || winner) return;

    const nextBoard = [...board];
    nextBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(nextBoard);
    setIsXTurn((prev) => !prev);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-24 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Tic-Tac-Toe</h1>
      <p className="text-gray-700 mb-6">
        {winner
          ? `Winner: ${winner}`
          : isDraw
            ? 'Draw!'
            : `Current Turn: ${isXTurn ? 'X' : 'O'}`}
      </p>

      <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
        {board.map((value, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleCellClick(index)}
            className="h-24 rounded-lg bg-white shadow text-3xl font-bold text-blue-600 hover:bg-blue-50"
          >
            {value}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={resetGame}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Restart Game
      </button>
    </div>
  );
}
