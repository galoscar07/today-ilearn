import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponenet/ValidationComponenet'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = {
    lengthChar: 0,
    enteredWord: '',
  }

  getCharComponentForDisplay = () => {
    let components = null;

    if (this.state.enteredWord !== '') {
      components = (
        <div>
          {this.state.enteredWord.split('').map((character, index) => {
            return <CharComponent
              click = {() => this.deleteCharHandler(index)}
              char = {character}
              key = {index}
            />
          })}
        </div>
      )
    }

    return components

  }

  countCharsInInputField = (event) => {
    let noChars = event.target.value.length;
    this.setState({
      lengthChar: noChars,
      enteredWord: event.target.value,
    });
  }

  deleteCharHandler = (index) => {
    let word = [...this.state.enteredWord];
    word.splice(index, 1);
    word = word.join('');
    this.setState({
      enteredWord: word,
      lengthChar: word.length,
    })
  }

  render() {

    let components = this.getCharComponentForDisplay();
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type='text' placeholder='Enter some text in here' onChange={this.countCharsInInputField} value={this.state.enteredWord}/>
        <p>{this.state.lengthChar}</p>
        <ValidationComponent
          lengthChar={this.state.lengthChar} />
        {components}
      </div>
    );
  }
}

export default App;
