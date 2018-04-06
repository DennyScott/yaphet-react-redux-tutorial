import React, { Component } from "react";
import { connect } from "react-redux";

class Friends extends Component {
  render() {
    return <div>Yaphets age: {this.props.yaphet.age}</div>;
  }
}

const mapStateToProps = state => ({
  yaphet: state.family.people[0]
});

export default connect(mapStateToProps)(Friends);
