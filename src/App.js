import React from 'react';
import logo from './logo.svg';
import './App.css';


function refreshPage() {
  window.location.reload();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The<code>WebMason</code></p>
        <a
          className="App-link"
          //href="https://thewebmason.org"
          rel="noopener noreferrer"
          //target="_blank"
          href="."
          onClick={() => refreshPage()}
        >
          <span>Reload</span>
        </a>
        <p><code>Coming soon...</code></p>
      </header>
    </div>
  );
}

export default App;
