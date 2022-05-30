const router = require("express").Router();
let Product = require("../models/productModel.js");
const multer = require("multer");
let slugify = require("slugify");
const mongoose = require("mongoose");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.route("/").get(async (req, res) => {
  await Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Can't find products" });
    });
});

router.route("/create").post(upload.single("image"), async (req, res) => {
  const name = req.body.name;
  const slug = slugify(req.body.name);
  const price = Number(req.body.price);
  const quantity = Number(req.body.quantity);
  const size = req.body.size;
  const category = req.body.category;
  let image = req.file.filename;

  const newProduct = new Product({
    _id: new mongoose.Types.ObjectId(),
    name,
    slug,
    price,
    quantity,
    size,
    category,
    image,
  });

  await newProduct
    .save()
    .then(() => {
      res.json("Product is created successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(upload.single("image"), async (req, res) => {
  let productID = req.params.id;
  const { name, price, quantity, size, category } = req.body;
  let image = req.file.filename;

  const updateProduct = {
    name,
    slug: slugify(name),
    price,
    quantity,
    size,
    category,
    image,
  };

  await Product.findByIdAndUpdate(productID, updateProduct)
    .then(() => {
      res.status(200).send({ status: "Product is updated successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error occured when updating data" });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  let productID = req.params.id;
  await Product.findByIdAndDelete(productID)
    .then(() => {
      res.json("Product is deleted successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error occured with delete" });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let productID = req.params.id;
  const product = await Product.findById(productID)
    .then((product) => {
      res.status(200).send({ status: "Product fetched", product });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error occured with getting product" });
    });
});

module.exports = router;
