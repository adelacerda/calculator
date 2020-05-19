import React from "react";

import CalculatorButton from "./CalculatorButton";
import CalculatorScreen from "./CalculatorScreen";
import "./Calculator.css";

export default class Calculator extends React.Component{
    constructor(props) {
    super(props);
      this.state = {
        allowedOperations: ["=", "+", "-", "*", "/"],
        lastInput: "",
        currentValue: 0,
        lastValue: 0,
        lastOperation: "",
      };
    }

  numberClicked = (value) => {
    if (this.state.allowedOperations.find(e => e === this.state.lastInput))
    {
      this.setState({
        ...this.state,
        lastValue: this.state.currentValue,
        currentValue: parseFloat(value),
        lastInput: value,
      });
      
    }
    else {
      this.setState({
        ...this.state,
        currentValue: parseFloat(
          this.state.currentValue +
            (this.state.lastInput === "." ? "." + value : value)
        ),
        lastInput: value,
      });
    }
  }
  operationClicked = (value) => {
    let result = this.state.currentValue;
    switch (this.state.lastOperation) {
      case "+":
        result = this.state.lastValue + this.state.currentValue;
        console.log(result);
        break;
      case "-":
        result = this.state.lastValue - this.state.currentValue;
        break;
      case "*":
        result = this.state.lastValue * this.state.currentValue;
        break;
      case "/":
        result = this.state.lastValue / this.state.currentValue;
        break;
      case "=":
        result = this.state.currentValue;
        break;
    }
    this.setState({
      ...this.state,
      currentValue : result,
      lastValue: 0,
      lastInput: value,
      lastOperation: value,
    });
  }
  clearClicked = () => {
    this.setState({
      ...this.state,
      currentValue: 0,
      lastValue: 0,
      lastInput: "",
      lastOperation: "",
    });    
  }
    render () {
        return (
          <div className="Calc">
            <label className="Calc-title">Calculator</label>
            <table>
              <tbody>
                <tr>
                  <td colSpan="4">
                    <CalculatorScreen label={this.state.currentValue} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <CalculatorButton
                      label={"7"}
                      value={"7"}
                      wasClicked={this.numberClicked}
                    />
                  </td>
                  <td>
                    <CalculatorButton
                      label={"8"}
                      value={"8"}
                      wasClicked={this.numberClicked}
                    />
                  </td>
                  <td>
                    <CalculatorButton
                      label={"9"}
                      value={"9"}
                      wasClicked={this.numberClicked}
                    />
                  </td>
                  <td>
                    <CalculatorButton
                      className="Calc-operation-button"
                      label={"/"}
                      value={"/"}
                      wasClicked={this.operationClicked}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <CalculatorButton
                      label={"4"}
                      value={"4"}
                      wasClicked={this.numberClicked}
                    />
                  </td>
                  <td>
                    <CalculatorButton
                      label={"5"}
                      value={"5"}
                      wasClicked={this.numberClicked}
                    />
                  </td>
                  <td>
                    <CalculatorButton
                      label={"6"}
                      value={"6"}
                      wasClicked={this.numberClicked}
                    />
                  </td>
                  <td>
                    <CalculatorButton
                      className="Calc-operation-button"
                      label={"*"}
                      value={"*"}
                      wasClicked={this.operationClicked}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <CalculatorButton
                      label={"1"}
                      value={"1"}
                      wasClicked={this.numberClicked}
                    />
                  </td>
                  <td>
                    <CalculatorButton
                      label={"2"}
                      value={"2"}
                      wasClicked={this.numberClicked}
                    />
                  </td>
                  <td>
                    <CalculatorButton
                      label={"3"}
                      value={"3"}
                      wasClicked={this.numberClicked}
                    />
                  </td>
                  <td>
                    <CalculatorButton
                      className="Calc-operation-button"
                      label={"-"}
                      value={"-"}
                      wasClicked={this.operationClicked}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <CalculatorButton
                      label={"0"}
                      value={"0"}
                      wasClicked={this.numberClicked}
                    />
                  </td>
                  <td>
                    <CalculatorButton
                      label={"."}
                      value={"."}
                      wasClicked={this.numberClicked}
                    />
                  </td>
                  <td>
                    <CalculatorButton
                      className="Calc-equal-button"
                      label={"="}
                      value={"="}
                      wasClicked={this.operationClicked}
                    />
                  </td>
                  <td>
                    <CalculatorButton
                      className="Calc-operation-button"
                      label={"+"}
                      value={"+"}
                      wasClicked={this.operationClicked}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="4">
                    <CalculatorButton
                      className="Calc-clear-button"
                      label={"C"}
                      value={"C"}
                      wasClicked={this.clearClicked}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }

};