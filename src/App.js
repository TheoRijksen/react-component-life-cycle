import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Components life cycle</h1>
        </header>
        <Body />
      </div>
    );
  }
}

class Body extends Component {
  constructor(props){
    super(props);

    this.state = {
      r: 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber() {
    // console.log("random number called");
    this.setState({r: Math.floor(Math.random()*10) });
  }

  render() {
    return (
      <div>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}> Random Number</button>
        <Numbers myNumber={this.state.r}/>

      </div>
    );
  }
}

class Numbers extends Component {
  componentWillMount() {
    console.log("componentWillMount called here");
  }

  componentDidMount() {
    console.log("componentDidMount called here");
  }

  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps called");
  }

  shouldComponentUpdate(newProps, nextState) {
    console.log("Called should component Update");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Called component Will Update");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Called component Did Update");
  }

  componentWillUnmount() {
    console.log("Called component Will Unmount");
  }

  render() {
    return (
      <div>
        <br />
        {this.props.myNumber}
      </div>
    );
  }
}

export default App;
