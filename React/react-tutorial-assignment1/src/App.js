import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    usernames: [
      {username: 'Oscar'},
      {username: 'Mihai'},
      {username: 'David'},
    ]
  }

  changeUsernameHandler = (event, currentNo) => {
    if (event.target.name === '0'){
      this.setState({
        usernames: [
          {username: event.target.value},
          {username: 'Mihai'},
          {username: 'David'},
        ]
      });
    }
    if (event.target.name === '1'){
      this.setState({
        usernames: [
          {username: 'Oscar'},
          {username: event.target.value},
          {username: 'David'},
        ]
      });
    }
    if (event.target.name === '2') {
      this.setState({
        usernames: [
          {username: 'Oscar'},
          {username: 'Mihai'},
          {username: event.target.value},
        ]
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="CardHolder">
          <UserOutput 
              username={this.state.usernames[0].username}/>
          <UserInput 
              clicked={this.changeUsernameHandler}
              username={this.state.usernames[0].username}
              currentNo='0' /> <br/>
        </div>
        <div className="CardHolder">
        <UserOutput 
            username={this.state.usernames[1].username}/> 
        <UserInput
            clicked={this.changeUsernameHandler}
            username={this.state.usernames[1].username}
            currentNo='1' /> <br/>
        </div>
        <div className="CardHolder">
        <UserOutput 
            username={this.state.usernames[2].username}/>
        <UserInput
            clicked={this.changeUsernameHandler} 
            username={this.state.usernames[2].username} 
            currentNo='2'/> <br/>
        </div>
      </div>
    );
  }
}

export default App;
