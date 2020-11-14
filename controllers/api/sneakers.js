const Sneaker = require('../../models/sneaker');

module.exports = {
    index,
    create,
    show,
    delete: removeSneaker,
    update
};

function create(req, res) {
    Sneaker.create(req.body, function (err, sneaker) {
        res.status(201).json(sneaker);
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
        res.json(sneaker);
    });
}


function index(req, res) {
    Sneaker.find({}, function (err, sneakers) {
        //senf JSON data
        res.status(200).json(sneakers);
    });
}