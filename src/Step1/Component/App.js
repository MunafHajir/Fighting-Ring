import React, { Component } from 'react';
import logo from '../logo.svg';
import '../../common.css';



//Hello,I am parent component and inside me you can import other components created by you
//I am excited to meet them :)
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Workshop</h1>
        </header>
        <p className="App-intro">
         <b> Winning is not Everything;</b>
          </p>
      </div>
    );
  }
}

export default App;
