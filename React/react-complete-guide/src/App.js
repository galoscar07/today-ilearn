import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working</p>
        <Person name="Oscar" age="20">
          My Hobbies: Cooking, watching Tv Series
        </Person>
        <Person name="Giuli" age="20"/>
        <Person name="Andree" age="21"/>
      </div>
    );
  }
}

export default App;
