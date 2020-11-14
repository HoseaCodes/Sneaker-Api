const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "Nike"
    },
    year: {
        type: Number,
        default: 2020
    }
}, { timestamps: true });


module.exports = mongoose.model('Sneakers', sneakerSchema);
