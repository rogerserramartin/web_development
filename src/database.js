const mongoose = require('mongoose');

//if the database exists, it will connect. If not, it will create it
mongoose.connect('mongodb://localhost/notes-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connected.'))
    .catch(err => console.error(err));
