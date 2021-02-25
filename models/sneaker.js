const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
    sneaker_id: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        default: "Nike"
    },
    retailPrice: {
        type: Number
    },
    description: {
        type: String
    },
    img: {
        type: [String]
    },
    releaseDate: {
        type: Date,

    },
    releaseYear: {
        type: Number,
        default: 2021
    }
}, { timestamps: true });


module.exports = mongoose.model('Sneakers', sneakerSchema);
