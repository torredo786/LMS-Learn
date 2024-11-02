require('dotenv').config();
const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.process || 5000;

const MONGO_URI = process.env.MONGO_URI;

const corsOptions = {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  };
  
app.use(cors(corsOptions));



app.use(express.json());

//database connection
mongoose.connect(MONGO_URI).then(()=> console.log("mongodb is connected")).catch((e)=>console.log(e));


//routes config
app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong'
    })
})

app.listen(PORT,()=>{
    console.log(`server is now running on port ${PORT}`)
})