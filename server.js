const express = require('express');
const port = 4000
const connectDb = require("./config/dbConnection")


const app = express();
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/user', require("./routes/userRoute"));
app.use('/api/policy', require("./routes/policyRoute"));


app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})