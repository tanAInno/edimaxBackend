var mongoose = require('mongoose');
// Setup schema
var edimaxSchema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    area: { 
        type: String,
        default: ''
    },
    status: { 
        type: String,
        default: ''
    },
    type: { 
        type: String,
        default: ''
    },
    pm1: { 
        type: String,
        default: ''
    },
    pm25: { 
        type: String,
        default: ''
    },
    pm10: { 
        type: String,
        default: ''
    },
    co: {
        type: String,
        default: ''
    },
    co2: {
        type: String,
        default: ''
    },
    tvoc: {
        type: String,
        default: ''
    },
    hcho: {
        type: String,
        default: ''
    },
    temperature: {
        type: String,
        default: ''
    },
    humidity: { 
        type: String,
        default: ''
    },
    date_time: {
        type: String,
        default: ''
    }
});
// Export edimax model
var edimax = module.exports = mongoose.model('edimax', edimaxSchema);
module.exports.get = function (callback, limit) {
    Edimax.find(callback).limit(limit);
}