const express = require("express");
const route = express.Router();
const {
  signup,
  signin,
  signout,
  requireSignin,
  signupp,
} = require("../controllers/authControllers");
const order = require("../models/orders");

const {
  userSignupValidator,
  userSigninValidator,
} = require("../validators/authValidator");

//pass on controllers
route.post("/signup", userSignupValidator, signup);
route.post("/signin", userSigninValidator, signin);
route.get("/signout", signout);
route.get("/signup",signupp);

// test
route.get("/secret", requireSignin, (req, res) => {
  res.json({
    user: req.user,
  });
});

route.post("/Order", (request, response) => {
  const { Name, PhNumber, ChooseTime, DeliveryAddress, OrderDetails, OrderPrice } = request.body;
  if (!Name || !PhNumber || !ChooseTime || !DeliveryAddress || !OrderDetails || !OrderPrice) {
      return response.status(422).json({ err: "blanks cannot be empty" });
  }
  order.findOne({ PhNumber: PhNumber })
      .then((userexist) => {
          if (userexist) {
              return response.status(422).json({ err: "order is running" });
          }
          const orders = new order({ Name, PhNumber, ChooseTime, DeliveryAddress, OrderDetails, OrderPrice });

          orders.save().then(() => {
              response.status(201).json({ message: " Order successful" });
          }).catch((err) => response.status(500).json({ err }));
      }).catch(err => { console.log({ err: "error hai yaaro" }); });
});
route.get("/Order", (request, response) => {

  order.find()
      .then((users) => {
          
          response.json(users);
      }).catch(err => { console.log({ err: "error hai yaaro" }); });
});

module.exports = route;
