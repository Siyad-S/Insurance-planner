const mongoose = require("mongoose");
const mongoString = `mongodb+srv://siyad:12345@siyad-cluster.gvtvydb.mongodb.net/Insurance-Chooser?retryWrites=true&w=majority`;

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(mongoString);
        console.log(
            "Database connected: ",
            connect.connection.host,
            connect.connection.name
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;
