import React, { Component } from "react";

class Person extends Component {
  render() {
    return (
      <div>
        Im {this.props.name}, and I am {this.props.age}
      </div>
    );
  }
}

export default Person;
