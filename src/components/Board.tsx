import React from 'react';
import Square from './Square';

interface BoardProps {
    squares: string[];
    onClick: (i: number) => void;
    winningSquares: number[];
}

const Board: React.FC<BoardProps> = ({ squares, onClick, winningSquares }) => {
    const renderSquare = (i: number) => {
        const isWinningSquare = winningSquares.includes(i);
        return <Square key={i} value={squares[i]} onClick={() => onClick(i)} isWinningSquare={isWinningSquare} />;
    };

    const createBoard = () => {
        let board = [];
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                row.push(renderSquare(i * 3 + j));
            }
            board.push(
                <div key={i} className="flex">
                    {row}
                </div>
            );
        }
        return board;
    };

    return <div>{createBoard()}</div>;
};

export default Board;