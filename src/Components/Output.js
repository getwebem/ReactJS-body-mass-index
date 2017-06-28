import React, { Component } from 'react';


class Output extends Component {
  render() {
    let height = this.props.data.height;
    let weight = this.props.data.weight;
    let bmi = this.props.data.bmi;
    let bmiClass = this.props.data.bmiClass;

    return (
      <div className="output">
        {height}
      </div>
    );
  }
}

export default Output;
