import React from 'react';
import PlayerList from './components/PlayerList';
import './App.css';
import useDarkMode from './utils/useDarkMode'

function App() {
  const [ theme, toggleTheme ] = useDarkMode()

  return (
    <>
      <div className="mainContainer" style={{
        background: theme === 'dark' ? '#000' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000'
      }}>
        <button type="button" onClick={toggleTheme}>
        Switch theme
        </button>
        <PlayerList theme={theme}/>
      </div>
    </>
  );
}

export default App;
