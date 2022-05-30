const Cart = require("../models/cartModel");
const router = require("express").Router();
const mongoose = require("mongoose");

function runUpdate(condition, updateData) {
  return new Promise((resolve, reject) => {
    //you update code here

    Cart.findOneAndUpdate(condition, updateData, { upsert: true })
      .then((result) => resolve())
      .catch((err) => reject(err));
  });
}

router.route("/addToCart").post(async (req, res) => {
  Cart.findOne({
    customerID: 1,
  }).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      const cartItems = [];

      req.body.cartItems.forEach((cartItem) => {
        const product = cartItem.product;
        const item = cart.cartItems.find((c) => c.product == product);
        let condition, update;
        if (item) {
          condition = {
            customerID: 1,
            "cartItems.product": product,
          };
          update = {
            $set: {
              "cartItems.$": cartItem,
            },
          };
        } else {
          condition = { customerID: 1 };
          update = {
            $push: {
              cartItems: cartItem,
            },
          };
        }
        cartItems.push(runUpdate(condition, update));
      });
    } else {
      const newCart = new Cart({
        _id: new mongoose.Types.ObjectId(),
        customerID: Number(req.body.customerID),
        cartItems: req.body.cartItems,
      });

      newCart
        .save()
        .then(() => {
          res.json("Cart is created successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

router.route("/getCartItems").get(async (req, res) => {
  Cart.findOne({ customerID: 1 }).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      console.log("get cartItems");
      let cartItems = [];
      cart.cartItems.forEach((item, index) => {
        console.log(item);
        item.cartId = cart._id;
        cartItems.push(item);
      });
      console.log(cartItems);
      res.status(200).json({ cartItems });
    }
  });
});

router.route("/removeCartItems/:product").delete(async (req, res) => {
  let product = req.params.product;

  Cart.findOne({
    customerID: 1,
  }).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      Cart.updateOne(
        { customerID: 1 },
        {
          $pull: {
            cartItems: {
              product: product,
            },
          },
        }
      ).exec((error, result) => {
        if (error) return res.status(400).json({ error });
        if (result) {
          res.status(202).json({ result });
        }
      });
    }
  });
});

router.route("/getReport").get(async (req, res) => {
  Cart.findOne({ customerID: 1 }).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      console.log("get cartItems");

      cart.forEach((item, index) => {
        console.log(item);
        item.cartId = cart._id;
        let cartItems = [];
        cartItems.push(cart.cartItems);
      });
      console.log(cart);
      res.status(200).json({ cart });
    }
  });
});

module.exports = router;
