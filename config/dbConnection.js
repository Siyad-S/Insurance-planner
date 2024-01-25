const mongoose = require("mongoose");
const mongoString = `mongodb+srv://siyad:12345@siyad-cluster.gvtvydb.mongodb.net/Insurance-Chooser?retryWrites=true&w=majority`;

const connectDb = () => {
    mongoose.connect(mongoString);
    const database = mongoose.connection;
    
    database.on('error', (error) => {
        console.log(error)
    })
    
    database.once('connected', () => {
        console.log('Database Connected');
    })
};

module.exports = connectDb;
