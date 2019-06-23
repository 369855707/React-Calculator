import Button from './components/Button';
import './App.css'
import Input from './components/Input';
import React, { Component } from 'react'
import ClearButton from './components/ClearButton';
import * as math from "mathjs";

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      input: ""
    }
  }

  addToInpunt = val => {
    this.setState({ input: this.state.input + val });
  };

  cleanInput = () => {
    this.setState({ input: "" });
  }

  calculate = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  }

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <div className="row">
            <Input input={this.state.input}></Input>
          </div>

          <div className="row">
            <Button clickHandler={this.addToInpunt}>7</Button>
            <Button clickHandler={this.addToInpunt}>8</Button>
            <Button clickHandler={this.addToInpunt}>9</Button>
            <Button clickHandler={this.addToInpunt}>/</Button>
          </div>
          <div className="row">
            <Button clickHandler={this.addToInpunt}>4</Button>
            <Button clickHandler={this.addToInpunt}>5</Button>
            <Button clickHandler={this.addToInpunt}>6</Button>
            <Button clickHandler={this.addToInpunt}>*</Button>
          </div>
          <div className="row">
            <Button clickHandler={this.addToInpunt}>1</Button>
            <Button clickHandler={this.addToInpunt}>2</Button>
            <Button clickHandler={this.addToInpunt}>3</Button>
            <Button clickHandler={this.addToInpunt}>-</Button>
          </div>
          <div className="row">
            <Button clickHandler={this.addToInpunt}>0</Button>
            <Button clickHandler={this.addToInpunt}>.</Button>
            <Button clickHandler={() => this.calculate()}>=</Button>
            <Button clickHandler={this.addToInpunt}>+</Button>
          </div>
          <div className="row">
            <ClearButton cleanHandler={this.cleanInput} />
          </div>

        </div>
      </div>
    )
  }
}

export default App;