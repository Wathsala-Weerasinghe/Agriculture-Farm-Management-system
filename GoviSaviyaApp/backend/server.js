require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));

const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Successfully connected to MongoDB");
  }
);

const categoryRouter = require("./routes/categoryRouter.js");
const productRouter = require("./routes/productRouter.js");
const cartRouter = require("./routes/cartRouter.js");
const userRouter = require("./routes/Customer.js");

app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/Customer", userRouter);

const PORT = process.env.PORT || 8070;
app.listen(PORT, () => {
  console.log("Server is running on port : ", PORT);
});
