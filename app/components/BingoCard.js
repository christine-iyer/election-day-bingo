import React, { useState, useEffect } from 'react';

export default function BingoCard() {
  const [grid, setGrid] = useState([]);
  const [marked, setMarked] = useState(Array(5).fill().map(() => Array(5).fill(false)));
  
  const letters = ["B", "I", "N", "G", "O"];

  // Populate the grid on component mount
  useEffect(() => {
    const newGrid = Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => letters[Math.floor(Math.random() * letters.length)])
    );
    setGrid(newGrid);
  }, []);

  const handleClick = (row, col) => {
    const newMarked = [...marked];
    newMarked[row][col] = !newMarked[row][col];
    setMarked(newMarked);
    checkForBingo(newMarked);
  };

  const checkForBingo = (markedGrid) => {
    const hasBingo = checkRows(markedGrid) || checkColumns(markedGrid) || checkDiagonals(markedGrid);
    if (hasBingo) alert("Bingo!");
  };

  const checkRows = (markedGrid) => markedGrid.some(row => row.every(cell => cell));
  const checkColumns = (markedGrid) => 
    markedGrid[0].some((_, colIndex) => markedGrid.every(row => row[colIndex]));
  const checkDiagonals = (markedGrid) => {
    const leftDiag = markedGrid.every((row, idx) => row[idx]);
    const rightDiag = markedGrid.every((row, idx) => row[4 - idx]);
    return leftDiag || rightDiag;
  };

  return (
    <div>
      <h1>Bingo Card</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 50px)", gap: "5px" }}>
        {grid.map((row, rowIndex) => (
          row.map((letter, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleClick(rowIndex, colIndex)}
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: marked[rowIndex][colIndex] ? "lightgreen" : "lightgrey",
              }}
            >
              {letter}
            </button>
          ))
        ))}
      </div>
    </div>
  );
}
