import React, { Component } from "react";

class Keypad extends Component {
  render() {
    return (
      <div className="keypad">
        <div className="keypad__row">
          <button
            onClick={() => this.props.onCKey()}
            className="btn btn--large"
          >
            C
          </button>

          <button onClick={() => this.props.onSignKey("%")} className="btn">
            %
          </button>
          <button onClick={() => this.props.onSignKey("/")} className="btn">
            /
          </button>
        </div>
        <div className="keypad__row">
          <button
            onClick={() => this.props.onKey(this.props.calKeys[8])}
            className="btn"
          >
            {this.props.calKeys[8]}
          </button>
          <button
            onClick={() => this.props.onKey(this.props.calKeys[7])}
            className="btn"
          >
            {this.props.calKeys[7]}
          </button>
          <button
            onClick={() => this.props.onKey(this.props.calKeys[6])}
            className="btn"
          >
            {this.props.calKeys[6]}
          </button>
          <button onClick={() => this.props.onSignKey("*")} className="btn">
            *
          </button>
        </div>
        <div className="keypad__row">
          <button
            onClick={() => this.props.onKey(this.props.calKeys[5])}
            className="btn"
          >
            {this.props.calKeys[5]}
          </button>
          <button
            onClick={() => this.props.onKey(this.props.calKeys[4])}
            className="btn"
          >
            {this.props.calKeys[4]}
          </button>
          <button
            onClick={() => this.props.onKey(this.props.calKeys[3])}
            className="btn"
          >
            {this.props.calKeys[3]}
          </button>
          <button onClick={() => this.props.onSignKey("-")} className="btn">
            -
          </button>
        </div>
        <div className="keypad__row">
          <button
            onClick={() => this.props.onKey(this.props.calKeys[2])}
            className="btn"
          >
            {this.props.calKeys[2]}
          </button>
          <button
            onClick={() => this.props.onKey(this.props.calKeys[1])}
            className="btn"
          >
            {this.props.calKeys[1]}
          </button>
          <button
            onClick={() => this.props.onKey(this.props.calKeys[0])}
            className="btn"
          >
            {this.props.calKeys[0]}
          </button>
          <button onClick={() => this.props.onSignKey("+")} className="btn">
            +
          </button>
        </div>
        <div className="keypad__row">
          <button
            onClick={() => this.props.onKey(this.props.calKeys[9])}
            className="btn"
          >
            {this.props.calKeys[9]}
          </button>
          <button onClick={() => this.props.addDot()} className="btn">
            .
          </button>
          <button
            onClick={() => this.props.onEqualsKey()}
            className=" btn btn--large"
          >
            =
          </button>
        </div>
      </div>
    );
  }
}
export default Keypad;
