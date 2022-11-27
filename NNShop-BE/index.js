const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
// const accountRoute = require("./routes/account");
const productRoute = require("./routes/product");
const promotionRoute = require("./routes/promotion");
const parser = require ("body-parser");
dotenv.config();
app.use(cors());
app.use(cookieParser());
app.use (parser.json());
app.use(express.json());
app.use(parser.urlencoded({extended : true}));


//connect database
mongoose.connect("mongodb://127.0.0.1:27017/NNShop", ()=>{
    console.log("Connected");
})

// routes
app.use("/api/users", userRoute);
// app.use("/api/accounts", accountRoute);
app.use("/api/products", productRoute);
app.use("/api/promotions", promotionRoute);
app.use("/api/auth", authRoute);
app.listen(3000, () => {
    console.log("Server is running...");
})