import React, { Component } from 'react';
import logo from '../logo.svg';
import '../../common.css';
import DisplayCards from './DisplayCards';
import ShowSelectedCard from './ShowSelectedCard';

/**
 * Remove the header
 * Show the "DisplayCards" Component and "ShowSelectedCard" Component inside the App
 * ShowSelected Component should have the following,
 * 1.<div> with <h1> with player
 * 2.background color default
 * 
 */


class App extends Component {
  
  render() {
    return (
      <div className="App">

        <h1>
          Winning is not everything!!
        </h1>
        <div className='setStage  '>
        <ShowSelectedCard />
        </div>
        <div className="cards-display">
      <DisplayCards />
        </div>
      </div>
    );
  }
}

export default App;
