import React from 'react';

interface SquareProps {
    value: string;
    onClick: () => void;
    isWinningSquare: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare }) => {
    return (
        <button
            className={`square w-16 h-16 bg-white text-1xl border border-gray-400 flex items-center justify-center ${value === 'O' ? 'text-red-500' : 'text-black'} ${isWinningSquare ? 'bg-red-200' : ''} m-0.5`}
            onClick={onClick}
            aria-label={`Square ${value}`}
            type="button"
        >
            {value}
        </button>
    );
};

export default Square;