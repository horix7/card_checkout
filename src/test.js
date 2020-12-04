const payloand = {
  card_number: "4556052704172643",
  cvv: "899",
  expiry_month: "01",
  expiry_year: "21",
  currency: "NGN",
  amount: "100",
  fullname: "Yemi Desola",
  email: "user@flw.com",
  tx_ref: "MC-3243e",
  redirect_url: "https://webhook.site/3ed41e38-2c79-4c79-b455-97398730866c",
  authorization: {
    mode: "pin",
    pin: "3310",
  },
};

const key = "6bf198d6335f6134e017c256";

function encrypt(key, text) {
  var forge = require("node-forge");
  var cipher = forge.cipher.createCipher(
    "3DES-ECB",
    forge.util.createBuffer(key)
  );
  cipher.start({ iv: "" });
  cipher.update(forge.util.createBuffer(text, "utf-8"));
  cipher.finish();
  var encrypted = cipher.output;
  return forge.util.encode64(encrypted.getBytes());
}

console.log(encrypt(key, JSON.stringify(payloand)));
