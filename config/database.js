const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/sneakers', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

db.on('connected', function () {
    console.log(`Mongodb is connected to ${db.host}:${db.port}`);
})