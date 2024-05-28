import React, { useState, useEffect } from 'react';
import './Grid.css';

const Grid = ({ gridSize, numMines }) => {
    const [grid, setGrid] = useState([]);

    useEffect(() => {
        setGrid(createInitialGrid(gridSize, numMines));
    }, [gridSize, numMines]);

    const handleClick = (row, col) => {
        // Clone the current grid state
        const newGrid = grid.map(row => row.map(tile => ({ ...tile })));

        // Update the specific tile
        if (!newGrid[row][col].revealed) {
            newGrid[row][col].revealed = true;
            setGrid(newGrid);
        }
    };

    return (
        <div className="grid">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((tile, colIndex) => (
                        <div
                            key={colIndex}
                            className={`tile ${tile.revealed ? 'revealed' : ''}`}
                            onClick={() => handleClick(rowIndex, colIndex)}
                        >
                            {tile.revealed ? (tile.isMine ? '💣' : '💎') : ''}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

const createInitialGrid = (size, numMines) => {
    const grid = Array.from({ length: size }, () => Array(size).fill({ revealed: false, isMine: false }));
    let minesPlaced = 0;

    while (minesPlaced < numMines) {
        const row = Math.floor(Math.random() * size);
        const col = Math.floor(Math.random() * size);

        if (!grid[row][col].isMine) {
            grid[row][col] = { revealed: false, isMine: true };
            minesPlaced++;
        }
    }

    return grid;
};

export default Grid;
