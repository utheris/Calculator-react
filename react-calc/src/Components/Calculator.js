import React, { Component } from "react";
import Screen from "./Screen/Screen";
import Keypad from "./Keypad/Keypad";

class Calculator extends Component {
  state = {
    calKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    displayValue: "0",
    memory: 0,
    signVal: "",
  };
  handleKey = (val) => {
    let displayVal = "" + this.state.displayValue;
    displayVal += val;
    this.setState({
      displayValue: displayVal,
    });
  };

  handleCKey = () => {
    this.setState({
      displayValue: 0,
      memory: 0,
    });
  };
  handleSignKey = (sign) => {
    this.setState({
      memory: this.state.displayValue,
      displayValue: 0,
      signVal: sign,
    });
  };
  handleEqualsKey = () => {
    let result = 0;
    switch (this.state.memory) {
      case "+":
        result =
          parseFloat(this.state.memory) + parseFloat(this.state.displayValue);
        break;
      case "-":
        result =
          parseFloat(this.state.memory) - parseFloat(this.state.displayValue);
        break;
      case "*":
        result =
          parseFloat(this.state.memory) * parseFloat(this.state.displayValue);
        break;
      case "/":
        result =
          parseFloat(this.state.memory) / parseFloat(this.state.displayValue);
        break;
      case "%":
        result = parseFloat(this.displayValue) / 100;
        break;
      default:
        break;
    }
    this.setState({ displayValue: result });
  };

  render() {
    return (
      <div className="calculator">
        <Screen result={this.state.displayValue} />
        <Keypad
          calKeys={this.state.calKeys}
          onKey={this.handleKey}
          onCKey={this.handleCKey}
          onSignKey={this.handleSignKey}
          onEqualsKey={this.handleEqualsKey}
        />
      </div>
    );
  }
}

export default Calculator;
