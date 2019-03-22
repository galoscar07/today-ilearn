import React, {useEffect} from 'react'

import classes from './Cockpit.css'

const cockpit = props => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect')
      // Http request
      setTimeout(() => {
          alert("Saved data in the cloud");
      }, 1000);
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
    }, []);
    // [] - it will run only one the first time
    // [props.persons] - it will run only when persons change
    // [a, b, c] - you can have as many variables as you want
    // no array it will run everytime

    useEffect(() => {
      console.log('[Cockpit.js] 2nd UseEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 3nd useEffect');
      }
    })

    // useEffect() as many times as you want

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPerson) {
        btnClass=classes.red
    }
    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
};

export default React.memo(cockpit);