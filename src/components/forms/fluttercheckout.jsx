import { Button, FormControl, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useFlutterwave, FlutterWaveButton } from 'react-flutterwave';
import logo from '../../Assets/AA.png'

export default function Flutter() {

    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")

    const config = {
    public_key: 'FLWPUBK-6d57e5eacda06ee5cea4a5b823a82b4e-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: email,
      phonenumber: phone,
      name: name,
    },
    customizations: {
      title: 'Africa Xyz',
      description: 'Payment for items in cart',
      logo: "https://instagram.fnbo1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/127434494_207418634233673_5276297265003989727_n.jpg?_nc_ht=instagram.fnbo1-1.fna.fbcdn.net&_nc_ohc=RyutnT7WFYcAX-Y5WIq&tp=1&oh=f44167b064ef6ee09bbd3ae08f1b15c4&oe=5FF41C3F",
    },
  };
 
  const handleFlutterPayment = useFlutterwave(config);
 
  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
      console.log(response);
    },
    onClose: () => {},
  };
 
  return (
    <div >
        <FormControl className="fulll">

        <TextField className="textField" required variant="outlined" type="text"  label="your name"  onChange={(event) => setName(event.target.value)}/>
        <br/>
        <TextField className="textField" required variant="outlined" type="email"  label="your email"  onChange={(event) => setemail(event.target.value)}/>
        <br/>
        
        <TextField className="textField" required variant="outlined" type="number"  label="your phone number "  onChange={(event) => setphone(event.target.value)}/>
        <br/>
      
      <Button
      variant="contained"
      color="primary"
        onClick={() => {
          if([name,email,phone].some((elem) => elem !== "")) {
            handleFlutterPayment({
                callback: (response) => {
                  console.log(response);
                },
                onClose: () => {},
              });
          }else {
            alert("submit All Information ")
          }
        }}
      >
        Pay With Flutter Wave (AFRICA)
      </Button>

      </FormControl>

 
      {/* <FlutterWaveButton {...fwConfig} /> */}
    </div>
  );
}