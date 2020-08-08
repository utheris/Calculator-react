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

    // let displayVal = dValue == 0 ? val : this.state.displayValue + val;
    // if (this.state.signFlag) {
    //   console.log("po operacji", this.state.signFlag, val);
    //   this.setState({ signFlag: false });
    //   //this.setState({ displayValue: val });
    //   console.log(
    //     "poz zmianie state",
    //     this.state.signFlag,
    //     this.state.displayValue
    //   );
    //   currentValue = dValue;
    // } else {
    //   currentValue = "" + this.state.displayValue;
    // }
    // //let displayVal = "" + this.state.displayValue;

    // this.setState({
    //   displayValue: displayVal,
    // });
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
        result =
          parseFloat(this.state.memory) * parseFloat(this.state.displayValue);
        break;
      case "/":
        result =
          parseFloat(this.state.memory) / parseFloat(this.state.displayValue);
        break;
      case "%":
        result = parseFloat(this.state.displayValue) / 100;
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
