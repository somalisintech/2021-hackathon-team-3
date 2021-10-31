const mongoose = require('mongoose');

//Location Schema
const locationSchema = mongoose.Schema({
    city: String,
    country: String,
    geolocation: { type: String, required: true }
});

// meta data Schema
const metaSchema = mongoose.Schema({
    createdDate: { type: Date, default: Date.now },
    void: false,
    id: { type: mongoose.Schema.Types.ObjectId, ref: "users" }
})

// User Schema
const userShema = mongoose.Schema({
    Number: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    Alias: String,
    groups: [String],
    Location: {
        type: locationSchema
    },
    meta: {
        type: metaSchema
    }
});

module.exports = mongoose.model('User', userShema);