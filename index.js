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
mongoose.connect('mongodb://localhost/resthub',{ useNewUrlParser: true });
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

// let devices = []

// async function getDevices(){
//     await axios.get("https://airbox.edimaxcloud.com/devices?token=9af3944d-5ffa-4650-8e6a-dd7e665e0cf7")
//         .then(response => {
//             devices = response.data.devices
//     }).catch(error => console.log(error))
// }

// async function postDevices(){
//     await devices.map((data,index) => {
//         axios.post("http://localhost:8080/api/edimaxs",{
//             name: data.name,
//             area: data.area,
//             status: data.status,
//             type: data.type,
//             pm1: data.pm1,
//             pm25: data.pm25,
//             pm10: data.pm10,
//             co: data.co,
//             co2: data.co2,
//             tvoc: data.tvoc,
//             hcho: data.hcho,
//             temperature: data.t,
//             humidity: data.h,
//             date_time: data.time
//         }).catch(error => console.log(error))
//     })
    
// }

// getDevices()

// setInterval(() => {
//     getDevices()
// },10000)

// setInterval(() => {
//     postDevices()
// },30000)
