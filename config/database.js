const mongoose = require('mongoose');
const db = mongoose.connection;

// mongodb://localhost/sneakers
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/sneakers', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

db.on('connected', function () {
    console.log(`Mongodb is connected to ${db.host}:${db.port}`);
})