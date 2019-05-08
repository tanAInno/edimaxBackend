var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    department: {
        type: String,
        default: ''
    },
    workplace: {
        type: String,
        default: ''
    },
    productList: {
        type: Array,
        default: []
    },
    paymentOption: {
        type: String,
        default: ''
    }
});

var product = module.exports = mongoose.model('product', productSchema);
module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}