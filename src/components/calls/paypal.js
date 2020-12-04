import React from "react";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default class PayPal extends React.Component {
  createOrder(data, actions) {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: this.props.total,
          },
        },
      ],
    });
  }

  onApprove(data, actions) {
    this.props.setSucess(true);
    return actions.order.capture();
  }

  onError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <PayPalButton
        createOrder={(data, actions) => this.createOrder(data, actions)}
        onApprove={(data, actions) => this.onApprove(data, actions)}
        onError={(err) => this.onError(err)}
      />
    );
  }
}
