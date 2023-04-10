const express = require("express");

const app = express();
const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://mongo:mypassword@mongo_db/?authsource=admin")
    .then(() => console.log("successfully connected to DB"))
    .catch((e) => console.log(e));

app.get("/",(req,res)=>{
    res.send("<h2>Hi There</h2>");
});

const port =process.env.PORT || 3000;

app.listen(port,() => console.log('listning on port $ {port}'));