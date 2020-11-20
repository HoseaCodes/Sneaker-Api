module.exports = {
    index,
};

function index(req, res) {
    res.render('admin', { title: 'Sneaker API' });
}
