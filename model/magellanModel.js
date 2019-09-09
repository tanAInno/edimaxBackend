var mongoose = require('mongoose');
// Setup schema
var magellanSchema = mongoose.Schema({
    hcho: {
        type: String,
        default: ''
    },
    co2: {
        type: String,
        default: ''
    },
    temp: {
        type: String,
        default: ''
    },
    pm10: {
        type: String,
        default: ''
    },
    hum: {
        type: String,
        default: ''
    },
    pm25: {
        type: String,
        default: ''
    },
    tvoc: {
        type: String,
        default: ''
    },
    date_time: {
        type: String,
        default: ''
    }
});
// Export magellan model
var magellan = module.exports = mongoose.model('magellan', magellanSchema);
module.exports.get = function (callback, limit) {
    Magellan.find(callback).limit(limit);
}