import React from "react";


export default class CalculatorScreen extends React.Component {
    render() {
        return (
          <div className="Calc-screen">
            <label>{this.props.label}</label>
          </div>
        );
    }

};