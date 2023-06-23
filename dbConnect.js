const mongoose = require('mongoose');
require('dotenv').config();

const password = process.env.MONGODB_PASSWORD;
const username = process.env.MONGODB_USR;

const connectionOptions = {
    auth:{
        user:username,
        password:password
    }
};

mongoose.connect(`mongodb+srv://${connectionOptions.auth.user}:${encodeURIComponent(connectionOptions.auth.password)}@cluster0.12s41zj.mongodb.net/expense-tracker`,{useNewUrlParser:true,useUnifiedTopology:true});

const connection = mongoose.connection;

connection.on('error',err => console.log(err));

connection.on('connected',() => console.log("Mongo DB connection successfull"));