// Lesson: Since each module has its own scope, you must import React in each module.
  // By importing the Component module from React, you no longer have to write "React.Component" each time you create a class. You can just write "Component."
import React, {Component} from 'react';

class Stopwatch extends Component {

  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0

  }; // end of state

  // ----------------------------------
  //   Stopwatch Methods
  // ----------------------------------

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 100);
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = () => {

    // If timer is not currently running...
    if (this.state.isRunning){
      // Timestamp the current time to be referenced later
      const now = Date.now();

      this.setState( prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
      }));
    }
  } // end ot tick()

  handleStopwatch = () => {
    this.setState( prevState => ({
      // Toggle the isRunning value to opposite its current condition
      isRunning: !this.state.isRunning
    }));

    // If timer is not currently running...
    if (!this.state.isRunning){
      // Timestamp the current time to be referenced later
      this.setState({previousTime: Date.now()});
    }

  } // end of handleStopwatch()

  resetTimer = () => {

    // Reset timer to zero
    this.setState({
      elapsedTime: 0,
    });

  } // end of resetTimer()

  // ------------------------------------------------
  //   Render Stopwatch Component
  // ------------------------------------------------
  render(){
    // Calculate time in seconds
    const seconds = Math.floor(this.state.elapsedTime / 1000);

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">
          {seconds}
        </span>
        <button onClick={this.handleStopwatch}>
          {/* If stopwatch is running, show "Stop", else show "Start." */}
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    ); // end of return statement
  } // end of render()
}

export default Stopwatch;
