const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://user1:user1@cluster0.gaqmv3e.mongodb.net/csvUploads?retryWrites=true&w=majority');


const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
