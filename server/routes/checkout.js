const express = require("express");
const router = express.Router();
const braintree = require("braintree");
const axios = require("axios");
const { BadGateway, BadRequest } = require("http-errors");
require("dotenv").config();

router.post("/", (req, res, next) => {
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    // Use your own credentials from the sandbox Control Panel here
    merchantId: "wmh3pppbk7ftf2kn",
    publicKey: "63hzgmzqyvzp2zyj",
    privateKey: "f40d4dd9cffa37a24ccebb574c9b6422",
  });

  // This is your real test secret API key.
  const stripe = require("stripe")(
    "sk_test_51HmcOVH8YQ1PwvyeIqDD8BpbehP8QPDImrEpgZKFyyh7HJ03DpyoCmngVy1ShYzeb2wUjKa6oZqd9H1YpT5p5iM000ZVbeJnFh"
  );

  // Use the payment method nonce here
  const nonceFromTheClient = req.body.paymentMethodNonce;
  // Create a new transaction for $10
  const newTransaction = gateway.transaction.sale(
    {
      amount: "10.00",
      paymentMethodNonce: nonceFromTheClient,
      options: {
        // This option requests the funds from the transaction
        // once it has been authorized successfully
        submitForSettlement: true,
      },
    },
    (error, result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(500).send(error);
      }
    }
  );
});

router.get("/payment/:id", async (req, res) => {
  let link =
    "https://payments-api.fdibiz.com/v2/momo/trx/" + req.params.id + "/info";

  const result = await axios({
    method: "post",
    url: "https://payments-api.fdibiz.com/v2/auth",
    data: {
      AppId: process.env.Api_Key,
      Secret: process.env.Api_Secret,
    },
  });

  const getStatus = await axios({
    method: "get",
    url: link,
    headers: { Authorization: `Bearer ${result.data.data.token}` },
  });

  return res
    .status(200)
    .json({
      token: getStatus.data.data.trxStatus,
    })
    .end();
});

router.post("/payment", async (req, res) => {
  const result = await axios({
    method: "post",
    url: "https://payments-api.fdibiz.com/v2/auth",
    data: {
      AppId: process.env.Api_Key,
      Secret: process.env.Api_Secret,
    },
  });

  try {
    const paymentPost = await axios({
      method: "post",
      url: "https://payments-api.fdibiz.com/v2/momo/pull",
      data: req.body,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${result.data.data.token}`,
      },
    });
    return res
      .status(200)
      .json({
        data: paymentPost.data.data,
      })
      .end();
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({
        data: error,
      })
      .end();
  }
});

module.exports = router;
