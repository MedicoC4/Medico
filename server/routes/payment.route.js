const route = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

route.post("/intents", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({ paymentIntent: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

module.exports = route;
