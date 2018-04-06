import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../person";
import { newPerson } from "./ducks";
import Friends from "./friends";

class Family extends Component {
  render() {
    return (
      <div>
        {this.props.people.map(person => (
          <Person name={person.name} age={person.age} />
        ))}

        <button onClick={() => this.props.addNewPerson(29, "Denny")}>
          Add Person
        </button>

        <div>
          My Friends
          <Friends />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  people: state.family.people
});

const mapDispatchToProps = dispatch => ({
  addNewPerson: (age, name) => dispatch(newPerson(age, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Family);
