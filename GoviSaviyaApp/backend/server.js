const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); //to remove the cors error that occurs when running two servers
const confRouter = require('./routes/confirms.js');
const seedRouter=require("./routes/seedroute.js");

const app = express();

//import routes
const postRoutes = require('./routes/posts');
const costRoutes = require('./routes/costs');


//app middleware
app.use(bodyParser.json());
app.use(cors());

app.use("/confirm", confRouter);
app.use("/seedroute",seedRouter)

//route middleware after requesting
app.use(postRoutes);
app.use(costRoutes);


const PORT = 8000;//declare s port to run
const DB_URL ='mongodb+srv://govisaviya:shaveesha123@cluster0.euokf.mongodb.net/govisaviya?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => console.log('DB connection error', err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`)
});