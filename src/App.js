import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Output from './Components/Output';
import Range from './Components/Range';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: 170,
      weight: 65,
      bmi: 22.49,
      bmiClass: 'Normal'
    }
  }

  heightChange(height){
    this.setState({height:height}, function(){
      console.log(this.state);
    });
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Body Mass Index</h2>
        </div>
        <div className="App">
        <form>
          <div>
            <label>Height</label>
            <Range onChange={this.heightChange.bind(this)}/>
          </div>
          <div>
            <label>Weight</label>

          </div>
        </form> <br /><br />
        <Output />
        </div>
      </div>
    );
  }
}

export default App;
