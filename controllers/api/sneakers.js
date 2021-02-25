const Sneaker = require('../../models/sneaker');

module.exports = {
    index,
    create,
    show,
    delete: removeSneaker,
    update
};

function create(req, res) {
    // const {sneaker_id, name, brand, retailPrice, description, img, releaseDate, releaseYear} = req.body;
    const sneaker = Sneaker.findOne({ sneaker_id: sneaker_id })
    if (sneaker) return res.status(400).json({ msg: "The sneakers already exists" })
    Sneaker.create(req.body, function (err, sneaker) {
        res.status(201).json(sneaker);
        console.log(err);
    });
}

function show(req, res) {
    Sneaker.findById(req.params.id, function (err, sneaker) {
        res.status(200).json(sneaker);
    });
}

function removeSneaker(req, res) {
    Sneaker.findByIdAndDelete(req.params.id, function (err, sneaker) {
        res.json(sneaker);
    })
}

function update(req, res) {
    Sneaker.findByIdAndUpdate(
        req.parmas.id,
        req.body,
        { new: true }
    ).then(function (sneaker) {
        res.status(200).json(sneaker);
    });
}


function index(req, res) {
    Sneaker.find({}, function (err, sneakers) {
        //send JSON data
        res.status(200).json(sneakers);
    });
}