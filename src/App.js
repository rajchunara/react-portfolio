import React from 'react';
import HomeComponent from './components/home/HomeComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
          <ul>
            <li><a href="">Home</a>  </li>
            <li><a href="">About</a> </li>
            <li><a href="">Projects</a>  </li>
          </ul>
        
        
      </div>
      <HomeComponent/>
    </div>
  );
}

export default App;
