// all users should have header:USER

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config({ path: __dirname + '/.env' })

const userRouters = require('./routes/user.routes');
const PORT = process.env.PORT || 3000;

// initilizing express app and configurations
const app = express();

// will change later to use env parameters
const db = (async() => {
    await mongoose.connect(
        process.env.MONGO_URI || "mongodb://127.0.0.1:27017/users", { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }, () => {
            console.log("Connected to the database!")
        })
})

db()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// home
app.get('/', (req, res) => {
    res.send("This Shimbir and Sheeko App..")
})

// calling routers
app.use('/api/users', userRouters);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(err.status || 404).json({
        message: "No such route exists"
    })
});

// TODO call here error messages- server down-



// listening server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})