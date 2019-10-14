import React, { Component } from 'react'
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput'

class App extends Component {
  state = {
    userName: 'Sarge'
  };

  inputEventHandler = (event) => {
    // console.log('registered');
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Hello World!</h1>
        <UserInput
          onChange={this.inputEventHandler}
          username={this.state.userName}/>
        <UserOutput
          username={this.state.userName}/>
        <UserOutput />
        <UserOutput />
      </div>
    )
  }
}

export default App