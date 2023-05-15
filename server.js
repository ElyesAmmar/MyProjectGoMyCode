const express = require("express");
require("dotenv").config({path:"./.env"});
const connectDB = require("./config/connectDB");
const Routes= require("./routes/productRoutes");

const App = express();
const PORT = process.env.PORT || 7011;


App.use(express.json())


App.use('/api/products', Routes)  // middleware routing





connectDB();

App.listen(PORT, (err)=>{
    if(err){
    console.log(err) }else {
     console.log(`server is running on ${PORT}`)
}})