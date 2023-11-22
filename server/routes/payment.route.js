const route = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const {Payment} = require("../database/index.js")


route.post("/intents", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // Create a new payment in your database
    const payment = await Payment.create({
      OrderId: req.body.orderId,
      amount: req.body.amount,
      currency: "usd",
      paymentIntentId: paymentIntent.id,
      status: paymentIntent.status,
    });

    res.json({ paymentIntent: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

module.exports = route;