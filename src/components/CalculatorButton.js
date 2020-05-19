import React from 'react';

export default class CalculatorButton extends React.Component
{
    render() {
    return (
      <div>
        <button
          className={(this.props.className || "Calc-number-button")}
          type="button"
          onClick={() => {
            this.props.wasClicked(this.props.value);
          }}
        >
          {this.props.label}
        </button>
      </div>
    );        
    }
};
