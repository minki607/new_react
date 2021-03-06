import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: "12312", name: 'Min' , age :25 },
      { id: "12121", name: 'Max' , age :28 },
      { id: "12213", name: 'Steph' , age :24 },
    ],
    showPerson: false
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
     
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson : !doesShow});
  }

  render() {

    let persons = null;
    let btnClass= '';

      if (this.state.showPerson) {
        persons = (
          <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age ={person.age}
            key={person.id}
            change ={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
        );
        btnClass = classes.Red;
      }

      const assignedClasses = [];
      if (this.state.persons.length <= 2){
        assignedClasses.push(classes.red);
      }
      if (this.state.persons.length <= 1){
        assignedClasses.push(classes.bold);
      }

      return (
        <div className={classes.App}>
          <h1>Hi I'm a react App</h1>
          <p className={assignedClasses.join(' ')}>This is really working </p>
          <button className={btnClass} onClick={this.togglePersonHandler}>Show Names</button>
          
        {persons}
        
        </div>
    );
  }
}

export default App;
