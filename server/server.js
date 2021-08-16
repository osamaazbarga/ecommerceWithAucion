const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const fs=require("fs")
require('dotenv').config()
require('./config/db')
const app = express();


app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

//route middleware
//route autoloading
fs.readdirSync('./routes').map((read)=>app.use("/api",require('./routes/'+read)))


if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));


    // Express serve up index.html file if it doesn't recognize route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const port =process.env.PORT||8001
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});