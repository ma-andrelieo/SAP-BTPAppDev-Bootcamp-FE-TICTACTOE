import React from 'react';
import './tailwind.css';
import Game from './components/Game';
//import Board from './components/Board';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 w-50 rounded-lg shadow-lg flex flex-col items-center">
        <header className="text-3xl font-bold mb-4">
          TIC TAC TOE
        </header>
        <p className="text-xs mb-1">Tap on a box to play.</p>
        <p className="text-xs mb-1">
          <span className="font-bold">Player X</span> starts first, followed by <span className="font-bold">Player O</span>.
        </p>
        <Game />
      </div>
    </div>
  );
}

export default App;