import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Mihai', age: 27 },
      { name: 'Oscar', age: 20 },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other state'
  });

  const [otherState, setOtherState] = useState('some other state');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked')
    // NEVER DO THIS !!! this.state.persons[0].name = 'Maximilian';
    setPersonsState ({
      persons: [
        { name: 'Maximilian', age: 8 },
        { name: 'Mihai', age: 7 },
        { name:  'Oscar', age: 0 },
        { name: 'Stephanie', age: 6 },
      ],
      otherState: personsState.otherState,
    })
  }

  return (
    <div className="App">
      <h1>I am react app :p</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      <Person name={personsState.persons[3].name} age={personsState.persons[3].age} />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Should work'));
}


export default app;
