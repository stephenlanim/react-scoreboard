// Lesson: Since each module has its own scope, you must import React in each module.
  // By importing the Component module from React, you no longer have to write "React.Component" each time you create a class. You can just write "Component."
import React, {Component} from 'react';

class AddPlayerForm extends Component {

  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e)=> {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({value: ''});
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter a player's name."
        />

        <input
          type="submit"
          value="Add Player"
        />
      </form>
    ); // end of return statement
  } // end of render()
}

export default AddPlayerForm;
