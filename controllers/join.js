const https = require("https");

module.exports = {
    index,
    failure
}

function index(req, res) {
    res.render('join', {
        title: 'Sneaker API'
    });
}

// If sign fails
function failure(req, res) {
    res.redirect("/")
}