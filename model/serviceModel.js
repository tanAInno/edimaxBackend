var mongoose = require('mongoose');

var serviceSchema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    address: {
        type: Object,
        default: null
    },
    totalprice: {
        type: String,
        default: ''
    },
    date: {
        type: String,
        default: ''
    },
    time: { 
        type: String,
        default: ''
    },
    services: {
        type: Array,
        default: []
    },
    addition: {
        type: Object,
        default: null
    },
    image: {
        type: String,
        default: ''
    },
    paymentOption: {
        type: String,
        default: ''
    }
});

var service = module.exports = mongoose.model('service', serviceSchema);
module.exports.get = function (callback, limit) {
    Service.find(callback).limit(limit);
}