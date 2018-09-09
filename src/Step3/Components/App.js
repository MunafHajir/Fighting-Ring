import React, { Component } from 'react';
import logo from '../logo.svg';
import '../../common.css';
import DisplayCards from './DisplayCards';
import ShowSelectedPlayers from './ShowSelectedCard';
import playerInfo from '../../data.js';

/**Welcome to Step 3
 * Understand What are props, use props to display the title in..
 * .. the ShowSelectedCard Component and change the background color
 * Property And Value to be use className="bg-color-blue selectedPlayer" And
 * player="PlayerA"
 * Once you are done with this Look at another part down */
class App extends Component {

  // selected = (id) => {
  //   console.log(id);
  // }
  state = {
  playerA : "",
  playerB : ""
}

  render() {

    return (

        <div className="App">
          <h1>
            Winning is not Everything!!
          </h1>
        
        <div className="setStage">
          <ShowSelectedPlayers class = "bg-color-blue selectedPlayer"  name = {this.state.playerA.name} url = {this.state.playerA ? this.state.playerA.image.url : null } />
          <ShowSelectedPlayers class = "bg-color-red selectedPlayer" name = {this.state.playerB.name} url = {this.state.playerB ? this.state.playerB.image.url : null} />

        </div>
        <div className="cards-display">
          {
            playerInfo.map((item)=>{
            return  <DisplayCards img = {item.image.url} name={item.name} key = {item.id} clicked = {() => {
              
              if (this.state.playerA === ""){
              this.setState({playerA : item});

              console.log(this.playerA);
              this.c++;
            }

              else{
              this.setState({playerB : item});

              }
            } } />
       
            })
        
              }
          
        </div>
      </div>

    );
  }
}

export default App;

/*step3:Part A
Share the Player Info between the ShowSelectedCard and Display cards
Display more than two cards using map()
Import the data from data.js into PlayerInfo to display more than two cards
*/
