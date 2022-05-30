const router = require("express").Router();
const Category = require("../models/categoryModel");
const multer = require("multer");
const slugify = require("slugify");
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

router.route("/create").post(upload.single("image"), async (req, res) => {
  //res.status(200).json({ file: req.file, body: req.body });

  const { name, description } = req.body;
  let image = req.file.filename;

  const category = new Category({
    _id: new mongoose.Types.ObjectId(),
    name: name,
    slug: slugify(name),
    description,
    image,
  });

  await category
    .save()
    .then(() => {
      res.json("Category is created successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(upload.single("image"), async (req, res) => {
  let categoryID = req.params.id;
  const { name, description } = req.body;
  let image = req.file.filename;

  const updateCategory = {
    name: name,
    slug: slugify(name),
    description,
    image,
  };

  await Category.findByIdAndUpdate(categoryID, updateCategory)
    .then(() => {
      res.status(200).send({ status: "Category is updated successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error occured when updating data" });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  let categoryID = req.params.id;
  await Category.findByIdAndDelete(categoryID)
    .then(() => {
      res.json("Category is deleted successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error occured with delete" });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let categoryID = req.params.id;
  const category = await Category.findById(categoryID)
    .then((category) => {
      res.status(200).send({ category });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error occured with getting product" });
    });
});

router.route("/").get(async (req, res) => {
  await Category.find()
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Can't find categories" });
    });
});

module.exports = router;
