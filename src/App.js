import React from 'react';
import './App.css';
import Header from './components/Header.js';
import CreateTask from './components/CreateTask.js';

function App() {
  return (
    <div className="App" >
        <Header />
      <header>
      <div>
        <h1 class="font-hairline text-5xl text-center py-3 text-gray-200">TODO G-O</h1>
      </div>
      <CreateTask />
        <p >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <p>Hola</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             Button
          </button>
      </header>
    </div>
  );
}

export default App;
