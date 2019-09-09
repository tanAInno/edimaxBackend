// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();
// Import routes
let apiRoutes = require("./api-routes")
// Init cors
let cors = require('cors');
// Configure bodyparser to handle post requests
let axios = require('axios');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true });
var db = mongoose.connection;
// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Use Api routes in the App
app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

moment = require('moment');

let devices = {}

async function getDevices() {
    await axios.get("https://www.aismagellan.io/api/things/pull/2b3c5cc0-d29f-11e9-810a-f990cf998f9d")
        .then(response => {
            devices = response.data
        }).catch(error => console.log(error))
}

let date = new Date
let format_date = moment(new Date).format('DD/MM/YYYY HH:mm:ss')+""

async function postDevices() {
    await axios.post("http://localhost:8080/api/magellans", {
        pm25: devices.PM2_5,
        pm10: devices.PM10,
        co2: devices.CO2,
        tvoc: devices.TVOC,
        hcho: devices.HCHO,
        temp: devices.Temperature,
        hum: devices.Humidity,
        date_time: format_date,
    }).catch(error => console.log(error))
}

getDevices()

setInterval(() => {
    getDevices()
}, 20000)

setInterval(() => {
    postDevices()
}, 60000)
