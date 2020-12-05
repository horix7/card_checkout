var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const checkout = require("./routes/checkout");
const id =
  "pk_test_51HmcOVH8YQ1PwvyejL4S6hKDCMuHMeEAwEIlZxBFafEnDK3Ka0M8gwBqZc4vLzOJGlmmQW3wTc5EJyECQsPPrtYM00ViNcbHpR";
const secret =
  "sk_test_51HmcOVH8YQ1PwvyeIqDD8BpbehP8QPDImrEpgZKFyyh7HJ03DpyoCmngVy1ShYzeb2wUjKa6oZqd9H1YpT5p5iM000ZVbeJnFh";

const stripe = require("stripe")(secret);

const app = express();
const { resolve } = require("path");
// This is your real test secret API key.
app.use(express.static("."));
app.use(express.json());
const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.use(cors());
app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/index", indexRouter);
app.use("/users", usersRouter);
// The checkout route
app.use("/checkout", checkout);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
