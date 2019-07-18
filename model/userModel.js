var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    surname: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    company: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    province: {
        type: String,
        default: ''
    },
    district: {
        type: String,
        default: ''
    },
    subdistrict: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    zipcode: {
        type: String,
        default: ''
    },
    productOrderList: {
        type: Array,
        default: []
    },
    serviceOrderList: {
        type: Array,
        default: []
    },
    accessToken: {
        type: String,
        default: ''
    }
})

var user = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}