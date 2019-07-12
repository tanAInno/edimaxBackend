var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
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
    homephone: {
        type: String,
        default: ''
    },
    fax: {
        type: String,
        default: ''
    },
    productList: {
        type: Array,
        default: []
    },
    totalprice: {
        type: String,
        default: ''
    },
    paymentImage: {
        type: String,
        default: ''
    }
});

var product = module.exports = mongoose.model('product', productSchema);
module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}