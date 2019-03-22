import React, {PureComponent} from 'react';
import Person from './Person/Person'

// Pure component is like a component but it implements should component update for every props that this class
// received from it's parent

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[PErsons.js] componentWillReceiveProps');
    // }

    // componentWillUpdate() {
    // }

    // shouldComponentUpdate(nextProps, nextstate) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.clicked !== this.props.clicked ||
    //         nextProps.changed !== this.props.changed
    //     ) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons.js] rendering ...')
        return this.props.persons.map( ( person, index ) => {
            return <Person
                key={person.id}
                click={() => this.props.clicked( index )}
                name={person.name}
                age={person.age}
                changed={( event ) => this.props.changed( event, person.id )} />
        } 
    );
    }
}

export default Persons;