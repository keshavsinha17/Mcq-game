import { useEffect, useState } from 'react'
import './App.css'
import SideBar from './components/SideBar';
import Grid from './components/Grid';
function App() {
    const [numMines, setNumMines] = useState(3); 

    return (
      <div className="App">
        <h1>Minesweeper Game</h1>
        <label>
          Number of Mines:
          <input
            type="number"
            value={numMines}
            onChange={(e) => setNumMines(parseInt(e.target.value, 10) || '')}
            min="1"
            max="25"
          />
          <button style={{cursor:'pointer'}}>Bet</button>
          {/* functionality to be shifted here  */}

        </label>
        <Grid gridSize={5} numMines={numMines} /> 
      </div>
    );
  }

  export default App;
  


