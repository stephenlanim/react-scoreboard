// Lesson: Since each module has its own scope, you must import React in each module.
  // By importing the Component module from React, you no longer have to write "React.Component" each time you create a class. You can just write "Component."
import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
// Did not need to import the Counter component into App.js because Counter is only a dependency of the Player component.


class App extends Component {
  // ------------------------------------------------------------
  //   Initial Top-Level States to Be Passed Down to Components
  // ------------------------------------------------------------
  state = {
    // Initial set of players
    players: [
      {
        name: "Stephen",
        score: 0,
        id: 1
      },
      {
        name: "Debbie",
        score: 0,
        id: 2
      },
      {
        name: "Colton",
        score: 0,
        id: 3
      }
    ] // end of players array
  }; // end of state

  // ------------------------------------------------
  //   App Methods to Be Passed Down to Components
  // ------------------------------------------------

  handleScoreChange = (index, scoreChange) => {
    this.setState( prevState => ({
      // Get the score belonging to the player whose button was clicked and update the score
      score: prevState.players[index].score += scoreChange
    }));
  }

  getHighScore = () => {
    // Create array of player scores
    const scores = this.state.players.map( p => p.score );

    // Determine the highest score
    const highScore = Math.max(...scores);

    // If there is a highest score...
    if (highScore) {
      return highScore;
    }
    // Otherwise...
    else {
      return null;
    }
  }

  handleAddPlayer = (playerName) => {
    this.setState( prevState => {
      // prevState = current array of players

      // Get id of last player on scoreboard
      const lastID = prevState.players[prevState.players.length - 1].id;

      // Create new player from user input
      const newPlayer = {
        name: playerName,
        score: 0,
        id: lastID + 1
      };

      // Render updated list of players to scoreboard
      return {
        // Create new array of players
        players: [
          // Import previous array of players using spread syntax
          ...prevState.players,
          // Add new player to array
          newPlayer
        ]
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      // prevState = current array of players

      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }


  // --------------------------------------
  //   Render App Components to the DOM
  // --------------------------------------
  render() {
    // Variables to be Passed to Components
    const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        {/* Header section with stats*/}
        <Header
          title="Scoreboard"
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            isHighScore={highScore === player.score}  // is a player's 'score' prop equal to the high score?
          />
        )}

        {/* Form for adding players to scoreboard */}
        <AddPlayerForm
          addPlayer={this.handleAddPlayer}
        />
      </div>
    ); // end of return statement
  } // end of render()

} // end of App component

// Each component must be exported and given an export name to allow for imports in other files.
export default App;
