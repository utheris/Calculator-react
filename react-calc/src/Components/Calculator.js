import React, { Component } from "react";
import Screen from "./Screen/Screen";
import Keypad from "./Keypad/Keypad";

class Calculator extends Component {
  state = {
    calKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    displayValue: 0,
    memory: 0,
    signVal: "",
    signFlag: false,
  };

  handleKey = (val) => {
    let dValue = this.state.displayValue;
    let toDisplayValue = "";

    if (dValue === 0) {
      toDisplayValue = val;
    } else {
      if (this.state.signFlag) {
        this.setState({ signFlag: false });
        toDisplayValue = val;
      } else {
        toDisplayValue = "" + dValue + val;
      }
    }
    this.setState({ displayValue: toDisplayValue });
  };

  handleCKey = () => {
    this.setState({
      displayValue: 0,
    });
  };
  handleSignKey = (sign) => {
    let newDisplayValue = this.state.displayValue;
    this.setState({
      memory: this.state.displayValue,
      displayValue: newDisplayValue,
      signVal: sign,
      signFlag: true,
    });
  };
  handleDot = () => {
    const { displayValue } = this.state;
    if (!/\./.test(displayValue)) {
      let ns = displayValue + ".";
      this.setState({
        displayValue: ns,
      });
    }
  };

  handleEqualsKey = () => {
    let result = 0;
    switch (this.state.signVal) {
      case "+":
        result =
          parseFloat(this.state.memory) + parseFloat(this.state.displayValue);
        break;

      case "-":
        result =
          parseFloat(this.state.memory) - parseFloat(this.state.displayValue);
        break;
      case "*":
        result = (
          parseFloat(this.state.memory) * parseFloat(this.state.displayValue)
        ).toFixed(3);
        break;
      case "/":
        if (this.state.displayValue === 0) {
          this.setState({
            displayValue: "BŁĄÐ",
          });
          return (result = this.state.displayValue);
        } else
          result = (
            parseFloat(this.state.memory) / parseFloat(this.state.displayValue)
          ).toFixed(3);

        break;
      case "%":
        result = (parseFloat(this.state.displayValue) / 100).toFixed(2);
        break;
      default:
        break;
    }

    this.setState({ displayValue: result });
  };

  render() {
    return (
      <div className="calculator">
        <Screen displayValue={this.state.displayValue} />
        <Keypad
          calKeys={this.state.calKeys}
          onKey={this.handleKey}
          onCKey={this.handleCKey}
          onSignKey={this.handleSignKey}
          onEqualsKey={this.handleEqualsKey}
          addDot={this.handleDot}
        />
      </div>
    );
  }
}

export default Calculator;
