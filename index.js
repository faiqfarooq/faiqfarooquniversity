import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import admissionapp from "./routes/admissionapp.js";
import auth from "./Middleware/Auth.js";
import cookieParser from "cookie-parser";


// //for authentication
// require("dotenv").config();

const app=express();

const url="mongodb+srv://Faiq:1234@cluster0.uqxcr.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true})
.then(() =>console.log("Connected to the DataBase"));

if ( process.env.NODE_ENV == "production"){

  app.use(express.static("lms/build"));

  const path = require("path");

  app.get("*", (req, res) => {

      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  })


}
const PORT=process.env.PORT || 5000; 
app.listen(PORT);

app.use(cors({credentials: true, origin: true,}));
app.use(cors());
app.use(cookieParser());
app.use(bodyparser.json({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));
app.use('/lms',admissionapp);

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });









