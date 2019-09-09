var mongoose = require('mongoose');

var productAdSchema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
    price: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    option: {
        type: String,
        default: ''
    }
})

var productAd = module.exports = mongoose.model('productAd', productAdSchema);
module.exports.get = function (callback, limit) {
    ProductAd.find(callback).limit(limit);
}