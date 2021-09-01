const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51JKc2PSBkiCACuutC7sbO1vHzppda5ZIJrxmlnUOPL8VB84ZRmHBFcxuL1sTei3YcbhW3lZoA2Z1BM4deMmbzyeu00HfITH8oF"
);

//API

//- APP config
const app = express();
//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "inr",
  });
  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//-Listen command
exports.api = functions.https.onRequest(app);
//example endpoint
// http://localhost:5001/clone-11d44/us-central1/api
