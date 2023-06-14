//--------------------------importing packages and modules-------------------------------//
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const route = require("../routes/route");
const app = express(); // calling express

//-------------------------using body-Parser middleware--------------------------------//
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const PORT = 4000;

//---------------------------connecting to mongoDB--------------------------------//
mongoose
    .connect(
        "mongodb+srv://skrohithossain2000:ZM72Svh2eBK2QiYt@cluster0.svd56m5.mongodb.net/mini_blog_site?retryWrites=true&w=majority", {
            useNewUrlParser: true,
        }
    )
    .then(() => console.log("mongodb is connected"))
    .catch((err) => console.log(err));

//-------------------------routing-----------------------------------//
app.use("/", route);

//-------------------------------starting server-------------------------------//
app.listen(PORT, function() {
    console.log("app is running at port no. :- ", PORT);
});