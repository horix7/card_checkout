import { Component } from "react";

export default class PaymentForm extends Component {


    componentDidMount () {
        const script = document.createElement("script");
        const clientId = "Af1O975CBLLtSbPyHJ3N_PPDj4eAiFUULRKh4EULj8clBG5ggXLPycpA8OSCe_UTFoYFWkyVZbhuswjQ"
        
        const SrcLink = `https://www.paypal.com/sdk/js?components=hosted-fields&client-id=Client-ID&merchant-id=Merchant-ID&currency=USD&intent=capture`
        script.src = "";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render() {
        return (
            
    <form id="my-sample-form">
    <label for="card-number">Card Number</label>
    <div id="card-number"></div>
    <label for="expiration-date">Expiration Date</label>
    <div id="expiration-date"></div>
    <label for="cvv">CVV</label>
    <div id="cvv"></div>
    <button value="submit" id="submit" class="btn">Pay with Card</button>
  </form>
        )
    }
}